import aiohttp
import asyncio

async def fetch_books():
    async with aiohttp.ClientSession() as session:
        async with session.get("books.json") as response:
            if response.status == 200:
                print("Request succeeded.")
                data = await response.json()
                return data
            else:
                print("Request failed.")
                return None

async def main():
    try:
        books = await fetch_books()
        if books:
            print("Fulfillment:", books)
    except Exception as e:
        print("Rejection:", e)
    finally:
        print("Finally: Clean up resources or perform other tasks")

# Run the main coroutine
asyncio.run(main())
