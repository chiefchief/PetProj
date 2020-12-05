// REQUESTS
export type TGenerateOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  params?: any;
};

export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
};
