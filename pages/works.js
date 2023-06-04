import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/sections'
import { WordGridItem, WorkGridItem } from '../components/grid-item'
import dp from '../public/images/dp.jpg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="id" title="Title" thumbnail={dp}>
            Placeholder
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works