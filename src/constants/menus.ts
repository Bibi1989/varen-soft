export type MenusT = {
  id: number;
  label: string;
  icon: string;
  active: boolean;
};

export const menus: MenusT[] = [
  {
    id: 1,
    active: false,
    label: "Overview",
    icon: "overview",
  },
  {
    id: 2,
    active: false,
    label: "Products",
    icon: "products",
  },
  {
    id: 3,
    active: true,
    label: "Campaigns",
    icon: "campaigns",
  },
  {
    id: 4,
    active: false,
    label: "Schedules",
    icon: "schedules",
  },
  {
    id: 5,
    active: false,
    label: "Payouts",
    icon: "payouts",
  },
  {
    id: 6,
    active: false,
    label: "Statement",
    icon: "statement",
  },
  {
    id: 7,
    active: false,
    label: "Settings",
    icon: "settings",
  },
];

export const menus2: MenusT[] = [
  {
    id: 1,
    active: false,
    label: "Inbox",
    icon: "overview",
  },
  {
    id: 2,
    active: false,
    label: "Notifications",
    icon: "products",
  },
  {
    id: 3,
    active: false,
    label: "Comments",
    icon: "campaigns",
  },
];
