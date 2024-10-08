//ROUTER

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { useStore } from "vuex";
import store from "@/store/index";
import DashboardLayout from "../layout/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: { hidden: true },
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "teacherDashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../components/teacher/Dashboard.vue"
          ),
        name: "TeacherDashboard",
        meta: {
          title: "Dashboard",
          icon: "Dashboard",
          affix: true,
          role: "teacher",
        },
      },
      {
        path: "teacherAttendance",
        component: () =>
          import(
            /* webpackChunkName: "attendance" */ "../components/teacher/Attendance.vue"
          ),
        name: "TeacherAttendance",
        meta: {
          title: "Attendance",
          icon: "Attendance",
          affix: true,
          role: "teacher",
        },
      },
      {
        path: "scanAttendance",
        component: () =>
          import(
            /* webpackChunkName: "scanAttendance" */ "../components/teacher/Scan.vue"
          ),
        name: "ScanAttendance",
        meta: {
          title: "ScanAttendance",
          icon: "ScanAttendance",
          affix: true,
          role: "teacher",
        },
      },
      {
        path: "report",
        component: () =>
          import(
            /* webpackChunkName: "report" */ "../components/teacher/Report.vue"
          ),
        name: "Report",
        meta: {
          title: "Report",
          icon: "Report",
          affix: true,
        },
      },
      {
        path: "student",
        component: () =>
          import(
            /* webpackChunkName: "student" */ "../components/teacher/Student.vue"
          ),
        name: "Student",
        meta: {
          title: "Student",
          icon: "Student",
          affix: true,
        },
      },
      {
        path: "adminDashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../components/admin/Dashboard.vue"
          ),
        name: "Dashboard",
        meta: {
          title: "AdminDashboard",
          icon: "AdminDashboard",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "adminAttendance",
        component: () =>
          import(
            /* webpackChunkName: "attendance" */ "../components/admin/Attendance.vue"
          ),
        name: "Attendance",
        meta: {
          title: "Attendancce",
          icon: "Attendance",
          affix: true,
          role: "admin",
        },
      },
      // {
      //   path: "Absence",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "absence" */ "../components/admin/Absence.vue"
      //     ),
      //   name: "Absence",
      //   meta: {
      //     title: "Absence",
      //     icon: "Absence",
      //     affix: true,
      //     role: "admin",
      //   },
      // },
      {
        path: "AdminReport",
        component: () =>
          import(
            /* webpackChunkName: "adminReport" */ "../components/admin/Report.vue"
          ),
        name: "AdminReport",
        meta: {
          title: "AdminReport",
          icon: "AdminReport",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "Teacher",
        component: () =>
          import(
            /* webpackChunkName: "teacher" */ "../components/admin/Teacher.vue"
          ),
        name: "Teacher",
        meta: {
          title: "Teacher",
          icon: "Teacher",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "AddTeacher",
        component: () =>
          import(
            /* webpackChunkName: "addTeacher" */ "../components/admin/AddTeacher.vue"
          ),
        name: "AddTeacher",
        meta: {
          title: "AddTeacher",
          icon: "AddTeacher",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "AdminStudent",
        component: () =>
          import(
            /* webpackChunkName: "adminStudent" */ "../components/admin/Student.vue"
          ),
        name: "AdminStudent",
        meta: {
          title: "AdminStudent",
          icon: "AdminStudent",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "AddStudent",
        component: () =>
          import(
            /* webpackChunkName: "addStudent" */ "../components/admin/AddStudent.vue"
          ),
        name: "AddStudent",
        meta: {
          title: "AddStudent",
          icon: "AddStudent",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "Subject",
        component: () =>
          import(
            /* webpackChunkName: "subject" */ "../components/admin/Subject.vue"
          ),
        name: "Subject",
        meta: {
          title: "Subject",
          icon: "Subject",
          affix: true,
          role: "admin",
        },
      },
      {
        path: "AddSubject",
        component: () =>
          import(
            /* webpackChunkName: "addSubject" */ "../components/admin/AddSubject.vue"
          ),
        name: "AddSubject",
        meta: {
          title: "AddSubject",
          icon: "AddSubject",
          affix: true,
          role: "admin",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const store = useStore(); // Get the Vuex store instance
//   const userRole = store.getters.userRole; // Assuming you have a getter for userRole in Vuex

//   if (to.meta.role && to.meta.role !== userRole) {
//     // Redirect to the correct dashboard based on role
//     if (userRole === "admin") {
//       return next({ name: "AdminDashboard" });
//     } else if (userRole === "teacher") {
//       return next({ name: "TeacherDashboard" });
//     }
//   }

//   next();
// });

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (!isAuthenticated && to.path !== "/login") {
    // If not authenticated and trying to access a restricted page, redirect to login
    next("/login");
  } else if (isAuthenticated && to.path === "/login") {
    // If authenticated and trying to access login, redirect to the appropriate dashboard
    if (store.getters.userRole === "teacher") {
      next("/teacherDashboard");
    } else if (store.getters.userRole === "admin") {
      next("/adminDashboard");
    } else {
      next(); // Allow access if no specific role is defined
    }
  } else {
    next(); // Allow access if authenticated
  }
});

export default router;
