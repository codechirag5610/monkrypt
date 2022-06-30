import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'zj26o6o5',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sknm88huK7DViOYUqSqADQ102CgvcvAAhyzvhsGqMdnLgjTFpPicWgbjN3ys3WfQy5EeyfhfyQTJ9b3hoNKikWlVudpX3TgGDHjMNx5ahTzrtAwP8XXw4yUJt8eVOSTruC5ug7mevnbuAyoTR16SBPmkFGt9gLLppKkDZzhfnW74cM3jkZnz',
    useCdn: false,
})