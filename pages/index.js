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
          Hello, and welcome to my website!
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
          <Paragraph>
            I am a Software Engineer / Developer currently working at Entelect in South Africa. I have experience working with full stack web development, DevOps, and cloud technologies (mostly AWS).
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={(0.2)}>
          <Heading as="h3" variant="section-title" >
            Biography
          </Heading>
          <BioSection>
            <BioYear>2023</BioYear>
            Joined Entelect as a Software Engineer, I currently work for the Standard Bank Digital team on cloud technologies and DevOps.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Graduated with a Bachelors in Computer Science with Cum Laude from University of the Witwatersrand, Johannesburg South Africa.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked for Amazon (AWS) Cape Town as a Software Development Engineer Intern for 3 months.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Certifications
          </Heading>
          AWS Certified Cloud Practitioner
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          LinkedIn 
          Github
        </Section>
        <Section delay={(0.5)}>
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