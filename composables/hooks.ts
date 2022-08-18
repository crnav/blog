
import { ElMessage, ElMessageBox } from 'element-plus'

import Http from '@/utils/http'

export const useCrud = (options: any) => {
	const defaultOptions: any = {
		dataList: [],
		dataListUrl: '',
		queryForm: {},
		page: 1,
		pageSize: 10,
		total: 0,
		dataListLoading: false,
		server: true, //是否服务端加载
		pageStatus: 0, //0 暂无数据  1到底了  2 加载
	}

	const mergeDefaultOptions = (options: any, props: any): any => {
		for (const key in options) {
			if (!Object.getOwnPropertyDescriptor(props, key)) {
				props[key] = options[key]
			}
		}
		return props
	}

	// 覆盖默认值
	const state = mergeDefaultOptions(defaultOptions, options)
	const query = async () => {
		if (state.pageStatus != 2) {
			return
		}
		if (!state.dataListUrl) {
			return
		}
		state.dataListLoading = true
		state.page++
		const res: any = await Http.get(state.dataListUrl, {
			page: state.page,
			pageSize: state.pageSize,
			...state.queryForm
		}, state.server)

		// .then((res: any) => {
		state.dataList = state.dataList.concat(res.data.rows)
		state.total = res.data.count
		// })
		state.dataListLoading = false
		// 到底了
		if (res.data.rows.length < state.pageSize) {
			state.pageStatus = 1
		} else {
			state.pageStatus = 2
		}
	}
	const getDataList = async (server: boolean = true) => {
		state.page = 1
		state.server = server
		await query()
	}
	const setState = (data: any) => {
		const { rows, count } = data

		Object.assign(state, {
			dataList: rows,
			total: count,
		});

		if (rows.length <= count) {
			// 有数据加载完了
			state.pageStatus = 1
		}
		if (count > state.pageSize) {
			// 数据还有
			state.pageStatus = 2
		}
		// 没有数据
		if (rows.length == 0) {
			state.pageStatus = 0
		} 

	}

	return { getDataList, setState }
}
