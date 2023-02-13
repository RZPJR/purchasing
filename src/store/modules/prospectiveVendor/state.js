const state = {
    // Readlist Prospective Vendor
    prospective_vendor_list: {
        isLoading: false,
        data: [],
        filter:{
            search: '',
            status: '',
            province: '',
            city: '',
            district: '',
        },
        table_header: [
            {
                text:'Code',
                sortable: false,
            },
            {
                text:'PIC Name',
                sortable: false
            },
            {
                text:'Province',
                sortable: false
            },
            {
                text:'City',
                sortable: false
            },
            {
                text:'District',
                sortable: false
            },
            {
                text:'Subdistrict',
                sortable: false
            },
            {
                text:'Status',
                sortable: false
            },
            {
                sortable: false
            },
        ],
        status_options: [
            {
                text:'All Status',
                value:999
            },
            {
                text:'New',
                value:1
            },
            {
                text:'Registered',
                value:2
            },
            {
                text:'Decline',
                value:3
            },
        ],
    },

    // Detail Prospective Vendor
    prospective_vendor_detail: {
        isLoading: false,
        data: [],
    },
};

export default state;
