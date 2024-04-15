// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function init(options?: { [data: string]: any }) {
  debugger
  return request<{
    data: '';
  }>('/image/api/init', {
    method: 'POST',
    ...(options || {}),
  });

}