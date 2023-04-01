use tester
select * from emp
--Create a view Select Banking as 'Bank Dept', Insurance as 'Insurance Dept' and Services as 'Services Dept' 
--from employee table 
CREATE VIEW  tempview AS 
select  case Department
when 'Banking ' then 'Bank Dept'
when 'Insurance' then 'Insurance Dept'
when 'Services' then 'Services Dept'
end as DEPARTMNET_NAME ,FIRST_NAME from emp
drop view tempview
select * from tempview

--2. Select employee details from employee table if data exists in incentive table ? 

create table INCENTIVES2 (
EMPLOYEE_EF_ID INT FOREIGN KEY(EMPLOYEE_EF_ID) REFERENCES emp(EMPLOYEE_ID),
INCENTIVE_DATE DATETIME,
INCENTIVE_AMOUNT BIGINT
)

insert into INCENTIVES2 values(1,'01-FEB-13',5000)
insert into INCENTIVES2 values(2, '01-FEB-13', 3000)
insert into INCENTIVES2 values(3 ,'01-FEB-13', 4000)
insert into INCENTIVES2 values(1 ,'01-JAN-13', 4500)
insert into INCENTIVES2 values(2, '01-JAN-13', 3500)
insert into INCENTIVES2 values(3, '01-JAN-13', 3400)
insert into INCENTIVES2 values(3, '01-JAN-13', NULL)

select * from INCENTIVES2

select * from emp e inner join INCENTIVES2 i on e.EMPLOYEE_ID=i.EMPLOYEE_EF_ID

--3. Find Salary of the employee whose salary is more than Roy Salary 

select salary from emp where SALARY >(select SALARY from emp where FIRST_NAME ='Roy')
select * from emp

--4. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
 create view empview as 
 select e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,i.INCENTIVE_DATE,i.INCENTIVE_AMOUNT from emp e inner join INCENTIVES2 i on e.EMPLOYEE_ID=i.EMPLOYEE_EF_ID;
 select * from empview

 --5. Create a view to select Select first_name, incentive amount from employee and 
 --incentives table for those employees who
 --have incentives and incentive amount greater than 3000

 create view inview as
 select e.FIRST_NAME,i.INCENTIVE_AMOUNT from emp e inner join INCENTIVES2 i on e.EMPLOYEE_ID=i.EMPLOYEE_EF_ID where i.INCENTIVE_AMOUNT>3000
 select * from inview
 drop view inview

 --6. Create a View to Find the names (first_name, last_name), job, department number, and department name of
 --the employees who work in LondonCreate a view to get the department name and number of employees in the
 --department.
 select * from emp
  select * from job_history
  select * from INCENTIVES2
create view cityview as
select CONCAT(first_name,' ',last_name) as E_name ,DEPARTMENT  from emp where city='london'
select * from cityview
 --7. Create a View to get the department name and number of employees in the department. 

 create view depview as
 select department ,count(FIRST_NAME) AS Number_of_EMPLOYEE from emp group by DEPARTMENT
 select * from depview


 --8. Find the employee ID, job title, number of days between ending date and starting date for all jobs
 --in department 90 from job history.-------

 drop table job_history
  create table job_history(
 employee_id INT NOT NULL UNIQUE,
 job_title varchar(20),
 start_date DATE NOT NULL,
 end_date DATE DEFAULT '--/--/---',
 job_id VARCHAR(10) NOT NULL UNIQUE,
  department_id INT NOT NULL
 )

 insert into job_history values(101,'BANKING','10-02-2019',CONVERT(DATE,'10/02/2022',103) ,'j_101',100);
 insert into job_history values(102,'CLERK','11-02-2017',CONVERT(DATE,'11/04/2022',103) ,'j_102',90);
 insert into job_history values(103,'SERVICES','05-05-2020',CONVERT(DATE,'12/03/2023',103) ,'j_103',90);
 insert into job_history values(104,'SERVICES','05-05-2019',CONVERT(DATE,'12/03/2022',103) ,'j_104',90);

 select * from job_history

 select employee_id,job_title , DATEDIFF(DAY,start_date,end_date)  as Diffrenece_date from job_history where department_id=90


 --Write a query to display the department name, manager name, and city. 
 alter table emp add city varchar(20) not null default 'unknown'
 alter table emp drop column city
 select * from emp
 update  emp set city='london'
 update  emp set city='paris'where EMPLOYEE_ID=2
  update  emp set city='new york'where EMPLOYEE_ID=3
   update  emp set city='mumbai' where EMPLOYEE_ID=4                             
   update  emp set city='delhi' where EMPLOYEE_ID=5
   update  emp set city='kolkata' where EMPLOYEE_ID=6
   update  emp set city='canada'where EMPLOYEE_ID=7
 select Department ,CONCAT(FIRST_NAME,' ',LAST_NAME) as MANAGER_NAME,city from emp

 --10. Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers 
-- whose experience is more than 15 years.--
 select * from emp
 create view manageview as
 select department ,CONCAT(first_name,' ',last_name ) as EMPLOYEE_NAME,JOINING_DATE ,salary as Manager_salary from emp where DATEDIFF(year,JOINING_DATE,GETDATE()) >8
 select * from manageview
 drop view manageview