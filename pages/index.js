import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/sections'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a software engineer!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jia-Xin Gao
            </Heading>
            <p>Web dev / DevOps / Cloud</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              disply="inline-block"
              borderRadius="full"
              src="/images/dp.jpg"
              alt="dp"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Paragraph</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={(0.2)}>
          <Heading as="h3" variant="section-title" >
            Bio
          </Heading>
          <BioSection>
            <BioYear>2020-2022</BioYear>
            Completed Bachelors in Computer Science
          </BioSection>
        </Section>
        <Section delay={(0.3)}>
          <Heading as="h3" variant="section-title" >
            Credits
          </Heading>
          <p>This website is built based on <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</a></p>
          <p>3D model <a href='https://skfb.ly/oH8MY' target='_blank'>Pusheen vs Noodle</a> by porgy is licensed under <a href='http://creativecommons.org/licenses/by/4.0/' target='_blank'>CC BY 3.0</a></p>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page