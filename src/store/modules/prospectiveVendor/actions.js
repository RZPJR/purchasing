import http from "../../../services/http";

const actions = {
    // Readlist Prospective Vendor
    fetchProspectiveVendor: async ({ state, commit }, payload) => {
        commit("setPreloadProspectiveVendor", true)
        commit("setProspectiveVendor", [])
        try {
            let filter = state.prospective_vendor_list.filter
            let status = filter.status === 999 ? '' : filter.status
            let province = filter.province === '' ? '' : filter.province
            let city = filter.city === '' ? '' : filter.city
            let district = filter.district === '' ? '' : filter.district
            // const response = await http.get('/app', {params: {
            //     per_page:100,
            //     status: status
            // }});
            // if(response.data.data !== null) commit("setProspectiveVendor", response.data.data)            
            commit("setPreloadProspectiveVendor", false)
        } catch (error) {
            console.log(error)
            commit("setPreloadProspectiveVendor", false)
        }
    },
    
    // Detail Prospective Vendor
    fetchProspectiveVendorDetail: async ({ state, commit }, payload) => {
        commit("setPreloadProspectiveVendorDetail", true)
        commit("setProspectiveVendorDetail", [])
        try {
            // const response = await http.get('/app'+payload.id);
            // if(response.data.data !== null) commit("setProspectiveVendorDetail", response.data.data)            
            commit("setPreloadProspectiveVendorDetail", false)
        } catch (error) {
            console.log(error)
            commit("setPreloadProspectiveVendorDetail", false)
        }
    },
}

export default actions;

