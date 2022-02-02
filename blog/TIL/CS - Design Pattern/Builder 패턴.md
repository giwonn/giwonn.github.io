# Builder 패턴
Builder 패턴은 객체를 생성할 때 사용하는 디자인 패턴 중 하나로, **다수의 필드를 가지는 복잡한 클래스의 객체를 생성하는 경우** 유용하다.
```java
// 생성자를 이용한 방법
User user = new User("giwon", 28, "서울", "developer", "010-1234-5678");

// setter를 이용한 방법
User user = new User();
user.setName("giwon");
user.setAge(28);
user.setAddress("서울");
user.job("developer");
user.phone("010-1234-5678");
```

```java
// Builder 패턴
User user = User.builder()
		.name("giwon")
		.age(28)
		.address("서울")
		.job("developer")
		.phone("010-1234-5678")
		.build();
```

Builder 패턴이 생성자나 setter보다 더 가독성이 좋고 코드를 구현하기도 편하다.  
위와 같이 빌더 패턴은 차례차례 변수를 받아들이고 모든 매개변수를 받고 나서 이 변수들을 통합하여 객체를 생성한다.
<br><br><br>

## 해결되는 문제점들


### 생성자를 통한 객체 생성의 문제점

- 특정 필드만 받아서 객체를 만들고 싶은 경우 생성자를 추가해야한다.
- 생성자 호출 코드만 보고 어떤 필드에 어떤 값이 들어가는지 알기 어렵다.

### setter 호출을 통한 객체 생성의 문제점

- setter 메서드가 있으므로 immutable을 지키기 힘들다.
- 여러번 호출해야 한다.
<br><br><br>

## 사용 예제

```java
public class User {
    private String name;
    private int age;
    private String address;
    private String job;
    private String phone;
	
    public User(String name, int age, String address, String job, String phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.job = job;
        this.phone = phone;
    }
    
    public static UserBuilder builder() {
    	return new UserBuilder();
    }
    
    public static class UserBuilder() {
      private String name;
    	private int age;
    	private String address;
    	private String job;
    	private String phone;
		}
        
    public UserBuilder name(String name) {
        this.name = name;
        return this;
    }
    
    public UserBuilder age(int age) {
        this.age = age;
        return this;
    }
    
    public UserBuilder address(String address) {
        this.address = address;
        return this;
    }
    
    public UserBuilder job(String job) {
        this.job = job;
        return this;
    }
    
    public UserBuilder phone(String phone) {
        this.phone = phone;
        return this;
    }
    
    public User build() {
        User user = new User(name, age, address, job, phone)
        return user;
    }
}
```

자바를 사용한다면 Lombok에서 @Builder 어노테이션을 이용하여 빌더 패턴을 쉽게 구현할 수 있다.
