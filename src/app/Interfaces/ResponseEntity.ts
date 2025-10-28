export default interface ResponseEntity {
  success: boolean;
  code: number;
  message?: string;
  data?: any;
}
