export default [
    {
        path: '/purchasing/prospective-vendor',
        name: 'ProspectiveVendor',
        component: () => import("./Index.vue"),
        meta: {
            auth: true,
            title: 'Prospective Vendor List'
        }
    },
    {
        path: '/purchasing/prospective-vendor/detail/:id',
        name: 'ProspectiveVendorDetail',
        component: () => import("./Detail.vue"),
        meta: {
            auth: true,
            title: 'Prospective Vendor Detail',
            breadcrumbs : [
                {
                    text: 'Prospective Vendor List',
                    to : '/purchasing/prospective-vendor'
                },
                {
                    text: 'Prospective Vendor Detail',
                },
            ],
        }
    },
]