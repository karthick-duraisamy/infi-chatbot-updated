
import { saveAs } from 'file-saver';
import CryptoJS from 'crypto-js';

export interface DownloadResponse {
  blob: Blob;
  filename: string;
  contentType: string;
}

export const downloadFile = async (
  inputData: any,
  actionName: string,
  url: string,
  fileName: string
): Promise<boolean> => {
  try {
    // AES encryption using the same key from crypto.ts
    const encryptionKey = "97cc+XE5NTUVhWOrdxrESw==";
    const data: string = CryptoJS.AES.encrypt(
      JSON.stringify(inputData),
      CryptoJS.enc.Base64.parse(encryptionKey),
      { mode: CryptoJS.mode.ECB }
    ).toString();

    const formData = new FormData();
    formData.append('data', data);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUzOTM4ODgzLCJpYXQiOjE3NTM4NjY5OTQsImp0aSI6ImYyMDc0ZjNhODRlNTQ1MWFhM2ZkNmZkNmQ0MTUzNWEzIiwidXNlcl9pZCI6MX0.DCl3Pdvw-s0KbL0-H-LbEKgntoUC6x4X6vNWsbXgYYs.Q2pLbTluK0NvY1cwVWJYdW1aVmxIRkNWRWVXckNLT0lIVjdRSkNpbzdjRUNma2NuZ3hLeTlxbWNsVW5CSjFBT09pMkt5UjJzWFJYejVzd2k2MmJQSGQzd0NtcjVsTnZ2dHN3TjUvRStkT09EeTZvRXdVMGJPbGVOTEVlS3RaUFV4Q2tISXI4MDVWR01mQ2tSVlZuOHVydDVnWWN3d3VSaUQvT0xJM25DcUJvWFNLTlpyUnMxSEJOSkVSMHJWYUFPTlRQTDhpay9wMFJRUUR5OURJR0lSUT09`
      }
    });

    if (response.ok) {
      const blob = await response.blob();
      saveAs(blob, `${fileName}.${actionName}`);
      return true;
    } else {
      console.error('Download failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Download error:', error);
    return false;
  }
};

export const isBinaryResponse = (response: any): boolean => {
  // Check if response is binary data (not JSON structure)
  if (typeof response === 'string') {
    try {
      JSON.parse(response);
      return false; // Valid JSON, not binary
    } catch {
      return true; // Not valid JSON, likely binary
    }
  }
  
  // Check if response doesn't have the expected chat completion structure
  return !response?.choices?.[0]?.message?.content;
};

export const detectFileType = (response: any): string => {
  // You can enhance this based on response headers or content
  const contentType = response?.headers?.['content-type'] || '';
  
  if (contentType.includes('excel') || contentType.includes('spreadsheet')) {
    return 'xlsx';
  } else if (contentType.includes('csv')) {
    return 'csv';
  } else if (contentType.includes('pdf')) {
    return 'pdf';
  }
  
  return 'xlsx'; // Default to excel
};
