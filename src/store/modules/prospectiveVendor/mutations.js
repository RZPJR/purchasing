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
};

export default mutations;
