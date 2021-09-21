export type CreateRouteRequest = {
  id: string;
  site_id: number;
  name: string;
  download_type: number[];
  waste_type: number[];
  description?: string;
  programming?: string;
  restrictions?: Record<string, any>;
  assets?: number[];
  path?: string;
};
