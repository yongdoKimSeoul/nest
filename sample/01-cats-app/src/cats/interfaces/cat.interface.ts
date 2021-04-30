
//interface는 Service에서 받는 데이터에 넣는 방식, 
//interface는 dto의 값과 동일하다. dto는 체크하는 과정이고, interface는 그릇임. 
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
