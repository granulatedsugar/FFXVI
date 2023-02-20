import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      backgroundImage={
        "url(https://fyre.cdn.sewest.net/ff-xvi/637cf9194dc880a0db62c591/hero_bg-tT8XHFrO5.jpg?quality=85&width=3840)"
      }
      backgroundSize={"100%"}
      backgroundPosition={"0% 0%"}
      backgroundRepeat={"no-repeat"}
      marginTop={"-80px"}
      w={"full"}
      h={"100vh"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}></Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
