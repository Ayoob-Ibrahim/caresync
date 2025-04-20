export interface serviceCardData {
    url: string;
    title: string;
    content: string;
    type: string;
}


export interface PackageInfo {
    title: string;
    content: string;
    height: string;
}

export interface CarePackage {
    image: string;
    title: string;
}

export interface MenuItem {
    svgType: string;
    text: string;
    bgClass: string;
    textClass: string;
    color: string;
}


export interface CarouselItem {
    image: string;
    title: string;
    description: string;
}


export interface Testimonial {
    client: string;
    logo_url: string;
    testimonial: string;
    asset: string;
}

export interface verticalTab {
    data: any,
    index: number
}

export interface PdfDocument {
    name: string;
    pdf: string;
}
export interface FilterData {
    title: string[];
    regions: string[];
    contracts: string[];
    category: string[];
    page?: number;
    description?: string;
}

export interface Pagination {
    pageSize: number;
    page: number;
    totalResult: number;
    totalPages: number;
}
