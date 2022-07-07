
export interface TsDropdown {
	devider?: Boolean,
	children: any
}

export interface TsDropdownItem {
  title: string, 
  children?: any,
  expand: Boolean
}

export interface TsDropdownList {
  title?: string
}

export interface TsSinggleMenu {
	devider?: Boolean,
	children: any
}

export interface TsSinggleMenuItem {
  title: string,  
  icon: any,
  href: any,
  expand?: Boolean
}

export interface TsContentType {
  children: any
}