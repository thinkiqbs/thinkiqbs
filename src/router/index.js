import HomeView from '../views/HomeView.vue'
import LogIn from '../views/Login.vue'
import RegisterUser from '../views/Register.vue'
import ProfilePage from '../views/Profile.vue'
import members from '../Backend/Members/members.vue'
// import MemberArea from '../Backend/Members/members.vue'
import DashBoards from '../Backend/Finance/dashboards.vue'
import LoansArea from '../Backend/Loans/loans.vue'
import BankingActivities from '../Backend/Finance/bank.vue'
import FosaPage from '../Backend/Finance/fosa.vue'
import AccountingPage from '../Backend/Finance/accounting.vue'
import ReportArea from '../Backend/Finance/reports.vue'
import CustomizeOrg from '../Backend/Admin/organization.vue'
import CreateOrg from '../Backend/Admin/createorganization.vue'

import contacts from "../views/contacts.vue";
import Logout from "../views/Logout";
import Profile from "../views/Profile";
import appaccess from "../views/appaccess.vue";
import Profile2 from "../views/Profile2";
import RegisterOrg from "../views/RegisterOrg";
import loanapplications from "../Backend/Loans/LoanApplication.vue";
import test from "../views/test";
import sysadmin from "../Backend/Admin/sysadmin.vue";
import userrole from "../Backend/Admin/userrole.vue";
import banksetup from "../Backend/Admin/banksetup.vue";
import coa from "../Backend/Admin/coa.vue";
import coamaster from "../Backend/Admin/coamaster.vue";
import createorganization from "../Backend/Admin/createorganization.vue";
import loantype from "../Backend/Admin/loantype.vue";
import savingstype from "../Backend/Admin/savingstype.vue";
import employers from "../Backend/Admin/employers.vue";
import organization from "../Backend/Admin/organization.vue";
import users from "../Backend/Admin/users.vue";
import imports from "../Backend/Admin/imports.vue";

import backend from "../Backend/backend.vue";

import savings from "../Backend/Savings/savings.vue";
import allocations from "../Backend/Finance/allocations.vue";
import loans from "../Backend/Loans/loans.vue";
import guarantors from "../Backend/Loans/guarantors.vue";
import finance from "../Backend/Finance/finance.vue";
import vendors from "../Backend/Finance/vendors.vue";
import distribute from "../Backend/Finance/distribute.vue";
import purchasing from "../Backend/Finance/purchasing.vue";
import sales from "../Backend/Finance/sales.vue";
// import accounting from "../Backend/Finance/accounting.vue";
import paymentsReceipts from "../Backend/Finance/paymentsReceipts.vue";
// import BankingActivities from "../Backend/Finance/bank.vue";
import banktransactions from "../Backend/Finance/banktransactions.vue";
import receipts from "../Backend/Finance/receipts.vue";
import payments from "../Backend/Finance/payments.vue";

import fosa from "../Backend/Finance/fosa.vue";

// import reports from "../Backend/Finance/reports.vue";
import expenses from "../Backend/Finance/expenses.vue";
import dashboards from "../Backend/Finance/dashboards.vue";
import operations from "../Backend/Finance/operations.vue";
import memberapplications from "@/Backend/Members/memberapplications.vue";
import repayments from "../Backend/Loans/Repayments.vue";
import monthcontribution from "@/Backend/Savings/monthcontribution.vue";
import depositschedule from "@/Backend/Savings/depositschedule.vue";
import monthallocation from "@/Backend/Savings/monthallocation.vue";
import loanschedule from "../Backend/Loans/loanschedule.vue";
import guarantorslist from "../Backend/Loans/guarantorslist.vue";
import approvers from "../Backend/Admin/approvers.vue";
import journals from "../Backend/Finance/journals.vue";
import budgets from "../Backend/Finance/budgets.vue";
import documents from "../Backend/Finance/documents.vue";
import taxes from "../Backend/Finance/taxes.vue";
import balancesheet from "../Backend/Reports/balancesheet.vue";
import trialbalance from "../Backend/Reports/trialbalance.vue";

import incomestatement from "../Backend/Reports/incomestatement.vue";

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{




        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },

    {
        path: '/members',
        name: 'members',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../Backend/Members/members.vue')
    },

    {
        path: '/bank',
        name: 'bank',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../Backend/Finance/bank.vue')
    },

    {
        path: '/loans',
        name: 'loans',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../Backend/Loans/loans.vue')
    },
    {
        path: '/accounting',
        name: 'accounting',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/Backend/Finance/accounting.vue')
    },



    {
        path: '/login',
        name: 'login',
        component: LogIn
    },
    {
        path: '/members',
        name: 'members',
        component: members
    },
    {
        path: '/dashboards',
        name: 'DashBoards',
        component: DashBoards
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterUser
    },

    {
        path: '/LoansArea',
        name: 'LoansArea',
        component: LoansArea
    },
    {
        path: '/FosaPage',
        name: 'FosaPage',
        component: FosaPage
    },
    {

        path: '/AccountingPage',
        name: 'AccountingPage',
        component: AccountingPage
    },
    {
        path: '/ReportArea',
        name: 'ReportArea',
        component: ReportArea
    },
    {
        path: '/customize',
        name: 'customize',
        component: CustomizeOrg
    },
    {
        path: '/BankingActivities',
        name: 'BankingActivities',
        component: BankingActivities
    },
    {
        path: '/organization',
        name: 'organization',
        component: CustomizeOrg
    },
    {
        path: '/createorganization',
        name: 'createorganization',
        component: CreateOrg
    },
    {
        path: "/contacts",
        name: "contacts",
        component: contacts,
    },

    {
        path: "/logout",
        name: "logout",
        component: Logout,
    },

    {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/taxes",
        name: "taxes",
        component: taxes,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/banktransactions",
        name: "banktransactions",
        component: banktransactions,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/receipts",
        name: "receipts",
        component: receipts,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/payments",
        name: "payments",
        component: payments,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/balancesheet",
        name: "balancesheet",
        component: balancesheet,
        meta: {
            requiresLogin: false,
        },
    },

    {
        path: "/trialbalance",
        name: "trialbalance",
        component: trialbalance,
        meta: {
            requiresLogin: false,
        },
    },

    {
        path: "/incomestatement",
        name: "incomestatement",
        component: incomestatement,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/documents",
        name: "documents",
        component: documents,
        meta: {
            requiresLogin: false,
        },
    },

    {
        path: "/budgets",
        name: "budgets",
        component: budgets,
        meta: {
            requiresLogin: false,
        },
    },

    {
        path: "/journals",
        name: "journals",
        component: journals,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/approvers",
        name: "approvers",
        component: approvers,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/createorganization",
        name: "createorganization",
        component: createorganization,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/appaccess",
        name: "appaccess",
        component: appaccess,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/profile2",
        name: "profile2",
        component: Profile2,
        // meta: {
        //     requiresLogin: true,
        // },
    },
    {
        path: "/memberapplications",
        name: "memberapplications",
        component: memberapplications,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/dashboards",
        name: "dashboards",
        component: dashboards,
        // meta: {
        //     requiresLogin: true,
        // },
    },
    {
        path: "/sysadmin",
        name: "sysadmin",
        component: sysadmin,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/userrole",
        name: "userrole",
        component: userrole,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/banksetup",
        name: "banksetup",
        component: banksetup,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/savingstype",
        name: "savingstype",
        component: savingstype,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/loantype",
        name: "loantype",
        component: loantype,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/coa",
        name: "coa",
        component: coa,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/coamaster",
        name: "coamaster",
        component: coamaster,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/distribute",
        name: "distribute",
        component: distribute,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/organization",
        name: "organization",
        component: organization,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/monthcontribution",
        name: "monthcontribution",
        component: monthcontribution,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/employers",
        name: "employers",
        component: employers,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/users",
        name: "users",
        component: users,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/imports",
        name: "imports",
        component: imports,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/registerorg",
        name: "registerorg",
        component: RegisterOrg,
    },
    {
        path: "/loanapplications",
        name: "loanapplications",
        component: loanapplications,
    },

    {
        path: "/loanschedule",
        name: "loanschedule",
        component: loanschedule,
    },
    {
        path: "/test",
        name: "test",
        component: test,
    },
    // backend menu
    {
        path: "/backend",
        name: "backend",
        component: backend,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/members",
        name: "members",
        component: members,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/savings",
        name: "savings",
        component: savings,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/depositschedule",
        name: "depositschedule",
        component: depositschedule,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/monthallocation.",
        name: "monthallocation",
        component: monthallocation,
        meta: {
            requiresLogin: true,
        },
    },

    // finance module
    {
        path: "/finance",
        name: "finance",
        component: finance,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/purchasing",
        name: "purchasing",
        component: purchasing,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/allocations",
        name: "allocations",
        component: allocations,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/sales",
        name: "sales",
        component: sales,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/paymentsReceipts",
        name: "paymentsReceipts",
        component: paymentsReceipts,
        meta: {
            requiresLogin: true,
        },
    },


    {
        path: "/fosa",
        name: "fosa",
        component: fosa,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/operations",
        name: "operations",
        component: operations,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/expenses",
        name: "expenses",
        component: expenses,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/ReportArea",
        name: "ReportArea",
        component: ReportArea,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/vendors",
        name: "vendors",
        component: vendors,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/loans",
        name: "loans",
        component: loans,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/guarantorslist",
        name: "guarantorslist",
        component: guarantorslist,
        meta: {
            requiresLogin: true,
        },
    },

    {
        path: "/guarantors",
        name: "guarantors",
        component: guarantors,
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: "/repayments",
        name: "repayments",
        component: repayments,
        meta: {
            requiresLogin: true,
        },
    },
]




const router = createRouter({ history: createWebHistory(), routes })

export default router