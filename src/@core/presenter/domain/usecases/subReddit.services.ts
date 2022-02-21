// import {Dispatch} from '@reduxjs/toolkit';
import API from '@presenter/io/config';
import {
  RequestResponse,
  RequestHeaders,
} from '@core/interface/request.interface';
import {apiRestGet} from '@utils/request.util';

export async function getSubReddit(): Promise<RequestResponse<any>> {
  const resp = await apiRestGet<RequestHeaders, any>({
    url: `${API.baseUrlNode}/${API.endpoints.subReddit}`,
  });
  if (!resp.error) {
    return resp;
  }
  return resp;
}
