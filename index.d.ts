/** EXT console module. */
declare namespace console {

  /**
   * Log to console.
   * @param message Message or object to write to console.
   * @param optionalParams Additional messages or objects to write.
   */
  export function log(message?: any, ...optionalParams: any[]): void

  /** Alias for {@link log}. */
  export function info(message?: any, ...optionalParams: any[]): void

  /** Alias for {@link log}. */
  export function debug(message?: any, ...optionalParams: any[]): void

  /**
   * Log an error to console.
   * @param message Message or object to write to console.
   * @param optionalParams Additional messages or objects to write.
   */
  export function error(message?: any, ...optionalParams: any[]): void
  
  /** Alias for {@link error}. */
  export function warn(message?: any, ...optionalParams: any[]): void

  /**
   * Log to console with a stack trace.
   * @param message Message or object to write to console.
   * @param optionalParams Additional messages or objects to write.
   */
  export function trace(message?: any, ...optionalParams: any[]): void

  /** Clear console if possible. */
  export function clear(): void

}
