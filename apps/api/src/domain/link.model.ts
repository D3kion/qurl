import { DB, Link as LinkModel } from '@qurl/datacloud';

export class Link implements LinkModel {
  id: string;
  domain: string;
  key: string;
  url: string;
  archived: boolean;
  expiresAt: Date;
  password: string;
  proxy: boolean;
  title: string;
  description: string;
  image: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  rewrite: boolean;
  ios: string;
  android: string;
  geo: DB.JsonValue;
  userId: string;
  publicStats: boolean;
  clicks: number;
  lastClicked: Date;
  checkDisabled: boolean;
  lastChecked: Date;
  createdAt: Date;
  updatedAt: Date;
  comments: string;
}
