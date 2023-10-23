interface CommonErrorResponse {
  error: boolean;
  message: string | string[];
  status: number;
}

class CommonError {
  static build(message: string, status: number) {
    return {
      error: true,
      message,
      status,
    };
  }
}

export { CommonError, CommonErrorResponse };
