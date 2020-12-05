export class INITIAL_GLOBAL {
  constructor(data: any = {}) {
    this.loader = data.loader || false;
  }
  loader: boolean;
}

export class INITIAL_PERSISTED {
  constructor(data: any = {}) {
    this.token = data.token || '';
  }
  token: string;
}
