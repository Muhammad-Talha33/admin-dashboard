export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "sk0kn9P2rB3WNFxt8sdyDOMv8zRsfuREFUJ240uCmX95ct3UqMOjszsuxoz7WmNCWWPifIwahzjkYn4DWWb3aunwc83gIT1AYzMrTWO88CsmbAoth9wrWUpfiDBkGpjtJISCr7m1N2VwZfaMQ54EmJy1JNGVMR83GP1u7bh33JWNwt4Nlvt3",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
