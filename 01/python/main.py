with open('../input.txt', 'r') as file:
    print(max([sum([int(value) for value in line.splitlines(False)]) for line in file.read().split('\n\n')]))
