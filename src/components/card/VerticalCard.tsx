import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { customScrollbar } from '../../styles/styles'

interface VerticalCardProps {
  card: {
    image: {
      url: string
      alt?: string
    }
    title: string
    content: string
    publishedDate: string
  }
}

export function VerticalCard({ card }: VerticalCardProps) {
  const { content, image, publishedDate, title } = card

  return (
    <Flex
      maxW="850px"
      maxH="400px"
      borderRadius="8px"
      bgColor="gray.100"
      overflow="hidden"
    >
      <Image
        src={image.url}
        alt={image.alt}
        maxW={['200px', '300px', '400px']}
        maxH={['200px', '300px', '400px']}
        objectFit="cover"
      />
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="350px"
        minW="200px"
        h={['200px', '300px', '400px']}
      >
        <Text variant="subtitle">{publishedDate}</Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  )
}
