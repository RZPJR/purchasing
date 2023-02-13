const mutations = {
  // Readlist Prospective Vendor
    setProspectiveVendor: function(state, payload) {
      state.prospective_vendor_list.data = payload;
      return state;
    },
    setPreloadProspectiveVendor: function(state, payload) {
      state.prospective_vendor_list.isLoading = payload;
      return state;
    },
    setProspectiveVendorFilter: function(state, payload){
      state.prospective_vendor_list.filter = payload;
      return state;
    },
    
  // Detail Prospective Vendor
  setProspectiveVendorDetail: function(state, payload) {
    state.prospective_vendor_detail.data = payload;
    return state;
  },
  setPreloadProspectiveVendorDetail: function(state, payload) {
    state.prospective_vendor_detail.isLoading = payload;
    return state;
  },
};

export default mutations;
