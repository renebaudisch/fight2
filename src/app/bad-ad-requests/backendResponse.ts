export class BackendResponse {
  publisher?: {
    results: Publisher[]
  };
  site?: {
    results: Site[]
  };
  status?: string;
}

class Publisher {
  code: string;
  id: number;
  last_modified: string;
  member_id: number;
  name: string;
  state: string;
}

class Site {
  code: string;
  id: number;
  last_modified: string;
  name: string;
  publisher_id: number;
  state: 'active';
}
