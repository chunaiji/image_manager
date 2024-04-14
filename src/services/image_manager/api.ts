// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function upload(options?: { [key: string]: any }) {
  return request<{
    data: '';
  }>('/api/upload', {
    method: 'POST',
    ...(options || {}),
  });
}