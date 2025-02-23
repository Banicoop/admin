export const menuData = [
      {
        name: 'Dashboard',
        icon: '/vector.svg',
        url: '/',
        visible: ["super_admin", "loan_admin", 'cell_admin', 'merchant'],
      },
      {
      name: 'Customers',
      icon: '/user.svg',
      url: '/customers',
      visible: ["super_admin"],
    },
    {
      name: 'Transactions',
      icon: '/card.svg',
      url: '/transactions',
      visible: ["super_admin"],
    },
    {
      name: 'Wallet',
      icon: '/card.svg',
      url: '/wallet',
      visible: ["super_admin"],
    },
    {
      name: 'Saving Cells',
      icon: '/save.svg',
      url: '/cells',
      visible: ["super_admin"],
    },
    {
      name: 'Loans',
      icon: '/save.svg',
      url: '/loans',
      visible: ["super_admin"],
    },
    {
      name: 'Merchants',
      icon: '/people.svg',
      url: '/merchants',
      visible: ['super_admin', 'merchant'],
    },
    {
      name: 'POS/ATMs',
      icon: '/card-pos.svg',
      url: '/pos',
      visible: ['super_admin'],
    },
    {
      name: 'Help & Support',
      icon: '/help.svg',
      url: '/help',
      visible: ['super_admin', "loan_admin", 'cell_admin', 'merchant'],
    },
    {
      name: 'Account Settings',
      icon: '/setting.svg',
      url: '/settings',
      visible: ['super_admin', "loan_admin", 'cell_admin', 'merchant'],
    },
    {
      name: 'Admin',
      icon: '/verify.svg',
      url: '/admin',
      visible: ["super_admin"],
    },
]


export const adminData = [
  {
    profile: {
      name: 'Dada Dimeji',
      img: '/admin/profile.png'
    },
    role: 'Super Admin',
    last_login: '3rd Nov 2023',
    status: 'Active'
  },
  {
    profile: {
      name: 'Dada Dimeji',
      img: '/admin/profile.png'
    },
    role: 'Super Admin',
    last_login: '3rd Nov 2023',
    status: 'Active'
  },
  {
    profile: {
      name: 'Dada Dimeji',
      img: '/admin/profile.png'
    },
    role: 'Super Admin',
    last_login: '3rd Nov 2023',
    status: 'Active'
  },
  {
    profile: {
      name: 'Dada Dimeji',
      img: '/admin/profile.png'
    },
    role: 'Super Admin',
    last_login: '3rd Nov 2023',
    status: 'Active'
  },
  {
    profile: {
      name: 'Dada Dimeji',
      img: '/admin/profile.png'
    },
    role: 'Super Admin',
    last_login: '3rd Nov 2023',
    status: 'Active'
  },
]



export const walletData = [
  {
    _id: '102020',
    img: '/wallet/icon.svg',
    type: 'Withdrawal',
    amount: '₦300,000.00',
    date: '3rd Nov 2023',
    issued: '1st May 2023',
    status: 'Successful'
  },
  {
    _id: '102020',
    img: '/wallet/icon.svg',
    type: 'Deposit',
    amount: '₦300,000.00',
    date: '3rd Nov 2023',
    issued: '1st May 2023',
    status: 'Successful'
  },
  {
    _id: '102020',
    img: '/wallet/icon.svg',
    type: 'Withdrawal',
    amount: '₦300,000.00',
    date: '3rd Nov 2023',
    issued: '1st May 2023',
    status: 'Successful'
  },
  {
    _id: '102020',
    img: '/wallet/icon.svg',
    type: 'Deposit',
    amount: '₦300,000.00',
    date: '3rd Nov 2023',
    issued: '1st May 2023',
    status: 'Pending'
  },
  {
    _id: '102020',
    img: '/wallet/icon.svg',
    type: 'Withdrawal',
    amount: '₦300,000.00',
    date: '3rd Nov 2023',
    issued: '1st May 2023',
    status: 'Successful'
  },

]


export const loans = [
  {
    date: 'Oct 15, 2024',
    loans: [
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
    ]
  }
]

export const loans1 = [
  {
    date: 'Oct 15, 2024',
    loans: [
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
      {
        img: '/loan/profile.png',
        name: 'Sarah Olueja',
        amount: 'N310,000.00'
      },
    ]
  }
]