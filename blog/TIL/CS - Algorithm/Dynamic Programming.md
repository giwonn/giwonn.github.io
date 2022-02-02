# Dynamic Programming (동적 계획법)

큰 문제를 작은 문제로 나누어 푸는 방법

## Divide and Conquer(분할정복)과의 차이

재귀함수처럼 같은 값을 중복되게 연산할 필요가 없다.

## 방법

모든 작은 문제들은 한번만 풀어야 한다.  
작은 문제들은 풀 때마다 어딘가에 값을 저장해놓고 필요할 때 호출한다. (Memoization)

## 피보나치를 예시로 보자

### 재귀함수

```python
def fibonacci(n):
  if n < 2:
    return n
  else:
    return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(10)) # 55
```

위의 코드는 재귀를 이용한 코드이다. fibonacci 함수가 같은 값들을 반복하며 연산하고 있다.

이런 불필요한 연산을 피하기 위해 한번 연산한 값을 저장해두는 것이다.

### Dynamic Programming 이용

```python
def fibonacci(n):
  if n <= 2:
    return 1

  if memo[n] != 0:
    return memo[n]

  memo[n] = fibo(n-1) + fibo(n-2)
  return memo[n]


print(fibonacci(10)) # 55
```

DP를 이용하면 푼 코드를 보면 memo라는 리스트에 값을 저장해놓는다.

DP는 Top-Down, Bottom-Up이라는 방식이 있는데 나중에 알아보도록 하자.
