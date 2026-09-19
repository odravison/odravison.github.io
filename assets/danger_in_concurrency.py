import asyncio
import random

one_thing = None
another_thing = None

async def calling_with_one_thing():
    global one_thing
    seconds = random.randint(3,5)
    await asyncio.sleep(seconds)
    print(f"one thing took: {seconds} seconds, and have returned")
    one_thing = seconds

async def calling_with_another_thing():
    global another_thing
    seconds = random.randint(1,2)
    await asyncio.sleep(seconds)
    print(f"another thing took: {seconds} seconds, and have returned")
    another_thing = seconds

async def main():
    global one_thing
    global another_thing
    (one, two) = await asyncio.gather(
        calling_with_one_thing(),
        calling_with_another_thing()
    )
    print(f"one_thing finished: {one_thing}")
    print(f"another_thing finished: {another_thing}")


asyncio.run(main())