<template>
    <v-container fill-height class="main-container">
        <div class="box-start">
            <v-row class="mb24">
                <v-col class="fs24 bold">
                    {{prospective_vendor.name ?? '-'}}
                </v-col>
                <v-col class="d-flex justify-end align-end">
                    <div v-if="this.prospective_vendor.status == 1">
                        <v-btn
                            elevation="0"
                            rounded
                            small
                            class="no-caps mb4"
                            :color="statusMaster('new')"
                        >New</v-btn>
                    </div>
                    <div v-else-if="this.prospective_vendor.status == 2">
                        <v-btn
                            elevation="0"
                            rounded
                            small
                            class="no-caps mb4"
                            :color="statusMaster('registered')"
                        >Registered</v-btn>
                    </div>
                    <div v-else-if="this.prospective_vendor.status == 3">
                        <v-btn
                            elevation="0"
                            rounded
                            small
                            class="no-caps mb4"
                            :color="statusMaster('declined')"
                        >Declined</v-btn>
                    </div>
                    <v-menu offset-y >
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="bg-white">
                        <v-list-item @click="seeHistory()" :data-unq='`prospectiveVendorDetail-button-history-${prospective_vendor.id}`'>
                            <v-list-item-content>
                                <v-list-item-title>History</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <DetailRowNew :name="'Phone Number'" :value="prospective_vendor.phone_number ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6">
                    <DetailRowNew :name="'Alternative Phone Number'" :value="prospective_vendor.alt_phone_number ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Comodity'" :value="prospective_vendor.comodity ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Address'" :value="prospective_vendor.address ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Subdistrict'" :value="prospective_vendor.subdistrict ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Postal Code'" :value="prospective_vendor.postal_code ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'District'" :value="prospective_vendor.district ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'City'" :value="prospective_vendor.city ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Province'" :value="prospective_vendor.province ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'PIC Name'" :value="prospective_vendor.pic_name ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'PIC Phone Number'" :value="prospective_vendor.pic_phone_number ?? '-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Best Time To Call'" :value="prospective_vendor.time ?? '-'"/>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    export default {
        name: "ProspectiveVendorDetail",
        data () {
            return {
                // 
            }
        },
        async created(){
            await this.fetchProspectiveVendorDetail({ id: this.$route.params.id })
        },
        computed : {
            ...mapState({
                prospective_vendor: state => state.prospectiveVendor.prospective_vendor_detail.data,
                loading: state => state.prospectiveVendor.prospective_vendor_detail.isLoading,
            }),
        },
        methods:{
             ...mapActions([
                "fetchProspectiveVendorDetail",
            ]),
        },
    }
</script>
