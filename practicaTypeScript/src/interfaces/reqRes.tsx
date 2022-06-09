
export interface ReqResListado {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        DataUsuarios[];
    support:     Support;
}

export interface DataUsuarios {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
    url:  string;
    text: string;
}

