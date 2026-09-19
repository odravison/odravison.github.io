import threading

BOUND = 10**5

guess = None

def collatz(n):
    steps = 0
    while n > 1:
        if n % 2:
            n = n * 3 + 1
        else:
            n = n // 2
        steps += 1
    return steps


def length_counter(target):
    count = 0
    for i in range(2, BOUND):
        if collatz(i) == target:
            count += 1
    return count


def get_input(prompt):
    global guess
    while True:
        n = input(prompt)
        try:
            n = int(n)
        except ValueError:
            print("Value must be an integer.")
            continue
        if n <= 0:
            print("Value must be positive.")
        else:
            guess = n
            return n


def main():
    print("Collatz Sequence Counter")

    target = get_input("Collatz sequence length to search for: ")
    print(f"Searching in range 1-{BOUND}...")

    t_guess = threading.Thread(
        target=get_input,
        args=tuple(["How many times do you think it will appear? "])
    )
    t_guess.start()

    count = length_counter(target)

    t_guess.join()

    if guess == count:
        print("Exactly right! I'm amazed.")
    elif abs(guess - count) < 100:
        print(f"You're close! It was {count}.")
    else:
        print(f"Nope. It was {count}.")


if __name__ == "__main__":
    main()