---
layout: post
title: "Hahnel - 2021 - Democratic Economic Planning Part 2"
date: 2024-06-23 
categories: blogging
permalink: /:year/:month/:day/:title.html


---

# Democratic Economic Planning Part 2 Central Planning

 

### Central Planning: An Introduction to Comprehensive Economic Planning

We begin by discussing central planning not to endorse it but for two reasons: (1) to introduce essential concepts for understanding comprehensive economic planning and (2) to highlight the pitfalls we must avoid. This chapter explains central planning's logic and feasibility, scrutinizing criticisms that deem efficient comprehensive planning impossible in theory and practice. The following chapter will provide a practical and substantive critique against central planning. Here, we outline an idealized version of central planning, while in Chapter 4, we discuss why central planning is best left in history.

#### A Hypothetical One-Year Model

Imagine an economy with no future beyond one year, with given stocks of capital goods, natural resources, and labor. Multiple techniques exist for producing each good. A central planning board (CPB) must decide the production levels using each technique. Let:

- **$x$** be a column vector of activity levels (each activity produces a single good, either final or intermediate).
- **$A$** be the input coefficient matrix of intermediate goods.
- **$K$** be the capital goods input coefficient matrix.
- **$k$*** be the column vector of available capital goods.
- **$R$** be the input coefficient matrix for natural resources.
- **$r$*** be the column vector of available natural resources.
- **$L$** be the input coefficient matrix for different labor types.
- **$l$*** be the column vector of available labor.
- **$v$** be a row vector of the relative "social values" of produced goods.
- **$I$** be the identity matrix.

With these, the CPB's task is to maximize the social value of net output without exceeding available resources. The primal programming problem is:




$$
\text{Primal Problem: Choose } x \text{ to maximize } v(I-A)x \\\text{ s.t. } Kx \leq k^*, Rx \leq r^*, Lx \leq l^*, \text{ and } x \geq 0
$$


The CPB aims to determine the optimal production levels, \($ x^o $\), to maximize economic well-being, given all technical coefficients, resource availabilities, and social values.

Two key concepts used extensively are the opportunity cost of using any productive input and the social cost of producing any output. These can be clarified using this one-year model.

##### Opportunity and Social Costs

Let:

- **$p(k)$** be a row vector of "prices" for different capital goods.
- **$p(r)$** be a row vector of "prices" for different natural resources.
- **$p(l)$** be a row vector of "prices" for different types of labor.

The solution to the dual programming problem, $\{p(k)^o, p(r)^o, p(l)^o\}$, gives the opportunity costs of using each input when producing the optimal plan. Positive opportunity costs indicate scarcity, while zero opportunity costs indicate abundance, given technologies and preferences.

The social cost of producing one unit of good \($ j$ \) when implementing the optimal production plan \($ x^o $\) is given by:

$$
p(j)^o = p(k)^o k(j) + p(r)^o r(j) + p(l)^o l(j)+p^o a(j)
$$
Here, $( k(j), r(j), l(j) )$ are the vectors of capital goods, natural resources, and labor used, and \($ a(j) $\) is the vector of intermediate goods used. Solving these equations for all outputs provides the social costs of production:

$$
p^o = (p(1)^o, p(2)^o, ..., p(j)^o, ..., p(n)^o)
$$

### A Multi-Good, Multi-Year Model

While the one-year model helps illustrate the basics of central planning and the concepts of opportunity and social costs, real-world central planning spans multiple years. This section explores how a central planning board (CPB) might approach multi-year economic planning.

1. **Time Horizon**: The plan covers $ t = 1, 2, \ldots, T $ years.
2. **Input Coefficients**: $ a_{ijp}(t) $ represents the units of good $ i $ needed to produce one unit of good $ j $ using process $ p $ in year $ t $.
3. **Output Levels**: $ x_{jp}(t) $ denotes the units of good $ j $ produced in year $ t $ using process $ p $.
4. **Total Production**: The total amount of good $ j $ produced in year $ t $ is $ x_j(t) = \sum_p x_{jp}(t) $.
5. **Labor Types**: There are different types of labor, $ l = 1, 2, \ldots $. The available labor hours of type $ l $ in year $ t $ are $ L_l(t)^* $, and the actual labor used is $ L_l(t) $.
6. **Labor Requirements**: $ a_{ljp}(t) $ represents the labor hours of type $ l $ needed to produce one unit of good $ j $ using process $ p $ in year $ t $.
7. **Natural Resources**: There are different types of natural resources, $ r = 1, 2, \ldots $. The available units of resource type $ r $ in year $ t $ are $ R_r(t)^* $, and the actual resource used is $ R_r(t) $.
8. **Resource Requirements**: $ a_{rjp}(t) $ represents the units of resource type $ r $ needed to produce one unit of good $ j $ using process $ p $ in year $ t $.
9. **Capital Goods**: $ S_s(t) $ represents the units of capital good $ s $ at the beginning of year $ t $.
10. **Capital Addition**: $ \Delta S_s(t) $ is the units of capital good $ s $ added to the stock in year $ t $.
11. **Depreciation**: $ \delta S_s(t) $ is the fraction of the capital good $ s $ that depreciates in year $ t $, assumed to be independent of usage.
12. **Capital Requirements**: $ S_{sjp}(t) $ represents the units of capital good $ s $ needed to produce one unit of good $ j $ using process $ p $ in year $ t $.
13. **Investment Requirements**: $ I_{isk} $ represents the total units of good $ i $ needed for a one-unit increase in the stock of capital good $ s $ using process $ k $.
14. **Annual Investment**: $ i_{isk}(t/t') $ represents the fraction of $ I_{isk} $ that must be invested in year $ t $ to produce one more unit of capital good $ s $ in year $ t' $ using process $ k $.
15. **Final Consumption**: $ q_i(t) $ is the units of good $ i $ available for final consumption in year $ t $.
16. **Social Value**: $ v_i(t) $ is the social value (utility) of consuming one unit of good $ i $ in year $ t $.
17. **Disutility of Labor**: $ w_l(t) $ is the social disutility of working one hour of labor type $ l $ in year $ t $.
18. **Value of Capital**: $ y_s(T) $ is the social value assigned to a unit of capital good $ s $ at the end of the final period $ T $.

#### Optimization Problem

To determine the optimal production and investment plan, the CPB must solve the following programming problem:

**Objective**: Maximize social welfare (SW):
$$
 \text{SW} = \sum_{t} \sum_{i} v_i(t)q_i(t) - \sum_{t} \sum_{l} w_l(t)L_l(t) + \sum_{s} y_s(T) S_s(T)
$$
**Constraints**:
1. **Production Constraints**: Each good $ i $ must meet its intermediate, investment, and final consumption needs each year:

$$
\sum_{p} \sum_{j} a_{ijp}(t)x_{jp}(t) \geq \sum_{p} x_{ip}(t) + \sum_{s} \sum_{k} i_{isk}(t/t') I_{isk} + \Delta S_s(t) + q_i(t)
$$

2. **Labor Constraints**: The available labor each year must be sufficient for production:

$$
\sum_{p} \sum_{j} a_{ljp}(t)x_{jp}(t) \leq L_l(t)^*
$$

3. **Resource Constraints**: The available natural resources each year must be sufficient for production:

$$
\sum_{p} \sum_{j} a_{rjp}(t)x_{jp}(t) \leq R_r(t)^*
$$

4. **Capital Constraints**: The necessary capital stocks must be available at the beginning of each year for production:

$$
\sum_{p} \sum_{j} S_{sjp}(t)x_{jp}(t) \leq S_s(0) + \Delta S_s(t) - \delta S_s(t)
$$

If the objective function and constraints are linear, this is a linear programming problem. Otherwise, it is a nonlinear programming problem.

**Given Variables**:
1. **Production Coefficients**: $ a_{ijp}(t), a_{ljp}(t), a_{rjp}(t), S_{sjp}(t) $
2. **Investment Coefficients**: $ i_{isk}(t/t'), I_{isk} $
3. **Depreciation Coefficients**: $ \delta S_s(t) $
4. **Available Labor and Resources**: $ L_l(t)^*, R_r(t)^* $
5. **Initial Capital Stocks**: $ S_s(0) $
6. **Utility of Consumption Goods**: $ v_i(t) $
7. **Disutility of Labor**: $ w_l(t) $
8. **Value of Final Capital Stocks**: $ y_s(T) $

**Decision Variables**: The CPB solves for $ x_{jp}(t) $ and $ q_i(t) $, which imply $ \Delta S_s(t) $, $ L_l(t) $, $ R_r(t) $.

As with the single-year model, the solution to the dual problem in the multi-year model provides the opportunity costs for each type of labor, natural resource, and capital stock. These costs are used to calculate the social cost of producing each good in every year when the optimal plan is implemented, regardless of whether the good is for final consumption, intermediate use, or as a capital good.

#### Addressing the Truncation Problem

A known theoretical issue in planning literature is the valuation of terminal capital stocks at the end of the planning horizon. The objective function includes the term $\sum_{s} y_s(T) S_s(T)$, assuming the CPB knows the value society places on capital stocks at the end of year $ T $. Setting $ y_s(T) = 0 $ for all $ s $ leads to an intuitively unsatisfying reduction in investment as $ T $ approaches, known as the "truncation problem," because it neglects the well-being of future generations beyond $ T $.

To balance the welfare of generations before and after $ T $, planners must choose positive values for $ y_s(T) $. An excellent explanation of the truncation problem and various solutions can be found in chapters 11 and 12 of Heal (1971). Heal endorses the "agreeable plan" proposed by Hammond and Mirrlees (1973) as the most theoretically satisfying way to address truncation problems. However, this discussion focuses on handling missing information during the planning horizon $ t = 2, 3, \ldots, T $, rather than post-$ T $ information.