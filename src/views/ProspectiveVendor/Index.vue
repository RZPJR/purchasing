<template>
    <v-container fill-height class="main-container">
        <div class="box-start">
            <v-row>
                <v-col cols="12" md="4" class="h70">
                    <v-tooltip top>
                        <template v-slot:activator="{ on: tooltip }">
                            <v-text-field
                                name="search"
                                v-model="filter.search"
                                prepend-inner-icon="search"
                                placeholder="Search..."
                                v-on="{ ...tooltip }"
                                outlined
                                dense
                                filled
                                data-unq="prospectiveVendor-input-search"
                            >
                            </v-text-field>
                        </template>
                        <span>Search by code, name</span>
                    </v-tooltip>
                </v-col>
            </v-row>
            <v-row class="hr-title"/>
            <v-row :class="showFilter?'mb24':''">
                <v-col>
                    Filter 
                    <v-btn 
                        depressed
                        x-small
                        @click="showFilter = !showFilter"
                        v-if="showFilter"
                        class="no-caps fs12"
                        data-unq="prospectiveVendor-button-filterExpandLess"
                    >
                        Hide
                        <v-icon
                            right
                        >
                            mdi-chevron-up
                        </v-icon>
                    </v-btn>
                    <v-btn 
                        depressed
                        x-small
                        @click="showFilter = !showFilter"
                        v-else
                        class="no-caps fs12"
                        data-unq="prospectiveVendor-button-filterExpandMore"
                    >
                        Show
                        <v-icon
                            right
                        >
                            mdi-chevron-down
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row v-if="showFilter">
                <v-col cols="12" md="3">
                    <v-select
                        v-model="filter.status"
                        :items="status_options"
                        item-text="text"
                        item-value="value"
                        label="Status"
                        data-unq="prospectiveVendor-select-status"
                        dense
                        outlined
                    ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                </v-col>
                <v-col cols="12" md="3">
                </v-col>
                <v-col cols="12" md="3">
                </v-col>
            </v-row>
        </div>
        <div class="box-header-table -mt4">
            Prospective Vendor
        </div>
        <div class="box-body-table">
            <v-data-table
                :mobile-breakpoint="0"
                :headers="prospective_vendor.table_header"
                :items="prospective_vendor.data"
                :loading="prospective_vendor.isLoading"
                :items-per-page="10"
            >
                <template v-slot:item="props">
                    <tr style="height:48px">
                        <td :data-unq="`prospectiveVendor-value-codeName-${props.index}`">
                            {{ props.item.code }}<br>
                            <span class="second-color">{{ props.item.name }}</span>
                        </td>
                        <td :data-unq="`prospectiveVendor-value-picNamePhoneNumber-${props.index}`">{{ props.item.pic_name }}<br>
                            <span class="second-color">{{ props.item.phone_number }}</span>
                        </td>
                        <td :data-unq="`prospectiveVendor-value-province-${props.index}`">{{ props.item.sub_district.district.city.province.name }}</td>
                        <td :data-unq="`prospectiveVendor-value-city-${props.index}`">{{ props.item.sub_district.district.city.name }}</td>
                        <td :data-unq="`prospectiveVendor-value-district-${props.index}`">{{ props.item.sub_district.district.name }}</td>
                        <td :data-unq="`prospectiveVendor-value-subdistrict-${props.index}`">{{ props.item.sub_district.name  }}</td>
                        <td :data-unq="`prospectiveVendor-value-status-${props.index}`">
                            <v-chip
                                class="ma-2"
                                :color="statusMaster(props.item.reg_status === 1 ? 'new' : props.item.reg_status === 2 ? 'registered' : 'decline')"
                                :text-color="statusMasterText(props.item.reg_status === 1 ? 'new' : props.item.reg_status === 2 ? 'registered' : 'decline')"
                            >
                                {{ props.item.reg_status == 1 ? 'New' :  props.item.reg_status == 2 ? 'Registered' : 'Decline'}}
                            </v-chip>
                        </td>
                        <td>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on: menu }">
                                    <v-btn
                                        icon
                                        v-on="{ ...menu }"
                                        :data-unq="`prospectiveVendor-value-actionButton-${props.index}`"
                                    >
                                        <v-icon dark>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>
                                <v-list class="bg-white">
                                    <v-list-item 
                                        :to="{ name: 'ProspectiveVendorDetail', params: { id: props.item.id } }" 
                                        :data-unq="`prospectiveVendor-value-detail-${props.item.id}`"
                                    >
                                        <v-list-item-title>Detail</v-list-item-title>
                                        <v-list-item-icon><v-icon>mdi-open-in-new</v-icon></v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";

    export default {
        name: 'Customer',
        data() {
            return {
                showFilter : false,
            }
        },
        mounted() {
            this.fetchProspectiveVendor()
        },
        computed: {
            ...mapState({
                prospective_vendor: state => state.prospectiveVendor.prospective_vendor_list,
                filter: state => state.prospectiveVendor.prospective_vendor_list.filter,
                status_options: state => state.prospectiveVendor.prospective_vendor_list.status_options,
            }),
        },
        methods: { 
            ...mapActions([
                'fetchProspectiveVendor'
            ]),
            ...mapMutations([
                'setProspectiveVendorFilter'
            ]),
            //For Filter Province
            provinceSelected(d) {
                this.filter.province = ""
                if (d) {
                    this.$store.commit('setProspectiveVendorFilter', {
                        ...this.filter,
                        province: val.id
                    })
                }
            },
            //For Filter City
            cityRegionSelected(val) {
                this.filter.city = '';
                if (val !== ''  && val !== undefined && val !== null) {
                    this.$store.commit('setProspectiveVendorFilter', {
                        ...this.filter,
                        city: val.id
                    })
                }
            },
            //For Filter District
            districtSelected(val) {
                this.filter.district = '';
                if(val !== '' && val !== undefined && val !== null){
                    this.$store.commit('setProspectiveVendorFilter', {
                        ...this.filter,
                        district: val.id
                    })
                }
            },
        },
        watch: {
            'filter': {
                handler: function (val) {
                    let that = this
                    clearTimeout(this._timerId)
                    this._timerId = setTimeout(function(){
                        that.fetchProspectiveVendor()
                    }, 1000);
                },
                deep: true
            },
        },
    } 
</script>
