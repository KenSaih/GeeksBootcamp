def make_shirt(size='large', text='I love Python'):
    """Prints the size and message of the shirt."""
    print(f"The shirt size is {size} and the message is '{text}'.")
    make_shirt()
    make_shirt(size='medium')
    make_shirt(size='small', text='Python is awesome!')
    make_shirt(size='extra large', text='Hello World!')
    make_shirt()

