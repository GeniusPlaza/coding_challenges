# Backtracking solution
# O(n * n!) time & space complexity


def _recursive_permutations(permutation, sequence, picked, result):
    if len(picked) == len(sequence):
        result.append(permutation)
        return
    for i, elem in enumerate(sequence):
        if i not in picked:
            _recursive_permutations(permutation + [elem], sequence,
                                    picked | {i}, result)


def get_permutations(s):
    result = []
    _recursive_permutations([], s, set(), result)

    return [''.join(permutation) for permutation in result]


if __name__ == '__main__':
    assert get_permutations('') == ['']
    assert get_permutations('a') == ['a']
    assert get_permutations('ab') == ['ab', 'ba']
    assert get_permutations('abc') == ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    assert get_permutations('aaa') == ['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa']
