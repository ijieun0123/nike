/**
 * @param relativePath public 폴더 내의 파일 경로
 * @returns 완성된 URL
 */
export const getAssetPath = (relativePath: string): string => {
    const BASE_URL = import.meta.env.BASE_URL;

    const trimmedRelativePath = relativePath.startsWith("/")
        ? relativePath.substring(1)
        : relativePath;

    return `${BASE_URL}${trimmedRelativePath}`;
};
