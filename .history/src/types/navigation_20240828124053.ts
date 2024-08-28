//TYPES FOLDER/NAVIGATION.TS

export interface Link {
  name: string;
  url: string;
  icon: string;
}

export interface LinkGroup {
  groupName: string;
  links: Link[];
}

export interface RoleLinks {
  ungrouped: Link[];
  grouped: LinkGroup[];
}

export const links: Record<string, RoleLinks> = {
  admin: {
    ungrouped: [
      {
        name: "Dashboard",
        url: "/adminDashboard",
        icon: "fa-solid fa-chart-line",
      },
    ],
    grouped: [
      {
        groupName: "Analyse",
        links: [
          {
            name: "Attendance",
            url: "/adminAttendance",
            icon: "fa-regular fa-file-lines",
          },
          {
            name: "Absence",
            url: "/absence",
            icon: "fa-regular fa-file-lines",
          },
          {
            name: "Report",
            url: "/adminReport",
            icon: "fa-regular fa-clipboard",
          },
        ],
      },
      {
        groupName: "Manage",
        links: [
          {
            name: "Teacher",
            url: "/teacher",
            icon: "fa-solid fa-chalkboard-user",
          },
          {
            name: "Student",
            url: "/adminStudent",
            icon: "fa-regular fa-user",
          },
          {
            name: "Subject",
            url: "/subject",
            icon: "fa-solid fa-book",
          },
        ],
      },
    ],
  },
  teacher: {
    ungrouped: [
      {
        name: "Dashboard",
        url: "/teacherDashboard",
        icon: "fa-regular fa-file-lines",
      },
    ],
    grouped: [
      {
        groupName: "Track",
        links: [
          {
            name: "Attendance",
            url: "/teacherAttendance",
            icon: "fa-regular fa-file-lines",
          },
          {
            name: "Scan Attendance",
            url: "/scanAttendance",
            icon: "fa-regular fa-file-lines",
          },
        ],
      },
      {
        groupName: "Analyse",
        links: [
          {
            name: "Report",
            url: "/report",
            icon: "fa-regular fa-clipboard",
          },
        ],
      },
      {
        groupName: "Manage",
        links: [
          {
            name: "Student",
            url: "/student",
            icon: "fa-regular fa-user",
          },
        ],
      },
    ],
  },
};
