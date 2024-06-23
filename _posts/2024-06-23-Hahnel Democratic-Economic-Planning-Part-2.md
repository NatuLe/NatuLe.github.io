---
layout: post
title: "Hahnel - 2021 - Democratic Economic Planning Part 2"
date: 2024-06-23 
categories: blogging
permalink: /:year/:month/:day/:title.html


---

# Democratic Economic Planning Part 2 Central Planning

 

## Central Planning: An Introduction to Comprehensive Economic Planning

We begin by discussing central planning not to endorse it but for two reasons: (1) to introduce essential concepts for understanding comprehensive economic planning and (2) to highlight the pitfalls we must avoid. This chapter explains central planning's logic and feasibility, scrutinizing criticisms that deem efficient comprehensive planning impossible in theory and practice. The following chapter will provide a practical and substantive critique against central planning. Here, we outline an idealized version of central planning, while in Chapter 4, we discuss why central planning is best left in history.

### A Hypothetical One-Year Model

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

#### Opportunity and Social Costs

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
\sum_{p} \sum_{j} a_{ljp}(t)x_{jp}(t) \leq L_l(t)^{\star}
$$

3. **Resource Constraints**: The available natural resources each year must be sufficient for production:

$$
\sum_{p} \sum_{j} a_{rjp}(t)x_{jp}(t) \leq R_r(t)^{\star}
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
4. **Available Labor and Resources**:  $ L_l(t)^{\star}$ ,$R_r(t)^{\star}  $
5. **Initial Capital Stocks**: $ S_s(0) $
6. **Utility of Consumption Goods**: $ v_i(t) $
7. **Disutility of Labor**: $ w_l(t) $
8. **Value of Final Capital Stocks**: $ y_s(T) $

**Decision Variables**: The CPB solves for $ x_{jp}(t) $ and $ q_i(t) $, which imply $ \Delta S_s(t) $, $ L_l(t) $, $ R_r(t) $.

As with the single-year model, the solution to the dual problem in the multi-year model provides the opportunity costs for each type of labor, natural resource, and capital stock. These costs are used to calculate the social cost of producing each good in every year when the optimal plan is implemented, regardless of whether the good is for final consumption, intermediate use, or as a capital good.

#### Addressing the Truncation Problem

A known theoretical issue in planning literature is the valuation of terminal capital stocks at the end of the planning horizon. The objective function includes the term $\sum_{s} y_s(T) S_s(T)$, assuming the CPB knows the value society places on capital stocks at the end of year $ T $. Setting $ y_s(T) = 0 $ for all $ s $ leads to an intuitively unsatisfying reduction in investment as $ T $ approaches, known as the "truncation problem," because it neglects the well-being of future generations beyond $ T $.

To balance the welfare of generations before and after $ T $, planners must choose positive values for $ y_s(T) $. An excellent explanation of the truncation problem and various solutions can be found in chapters 11 and 12 of Heal (1971). Heal endorses the "agreeable plan" proposed by Hammond and Mirrlees (1973) as the most theoretically satisfying way to address truncation problems. However, this discussion focuses on handling missing information during the planning horizon $ t = 2, 3, \ldots, T $, rather than post-$ T $ information.


### Information Issues in Central Planning

The initial criticism of central planning was that even if the central planning board (CPB) knew all of the “givens” mentioned earlier, it could never solve the programming problem for even a moderate-size real-world economy. This objection, initially raised by Enrico Barone, was valid early in the 20th century and led to the practical necessity of using the method of material balances, as discussed below, to arrive at plans in the early years of the Soviet Union. However, advances in mathematical programming theory and computer technology have rendered this original critique obsolete. Why the Soviet Union, and other countries that began to use central planning after WWII, did not take advantage of these advances is an interesting question we need not delve into here. However, there can be no doubt that as we enter the third decade of the 21st century, the original criticism of comprehensive socialist planning — namely, that due to the size of the programming problem, it is technologically impossible for a CPB to calculate an efficient, detailed, comprehensive plan for a modern economy — is no longer valid.

The second criticism focuses on whether the CPB could ever discover all the “givens” it needs to solve the planning problem. Consider only the single-year model:

1. **Capital, Resources, and Labor Supplies**: It should not be difficult for the CPB to determine the size of stocks of capital goods, natural resources, and labor supplies available at the beginning of the year — $k^*, r^*, \text{and } l^*$.
2. **Value to Society of Different Goods**: How can the CPB know $v$?
3. **Production Technologies**: How can the CPB discover $\{A, K, R, L\}$, which includes multiple techniques for producing each good?

These “information problems” are at the center of the “tacit knowledge” critique of central planning.

### Finding the Social Welfare Function

There are three ways the CPB might find $v$, the social values for the different final consumption goods:

1. **Political Authority**: Some political authority could provide the CPB with $v$.
2. **Retail Prices**: The CPB could use information from prices in retail outlets to find $v$.
3. **Voting**: Citizens could vote for $v$.

#### Political Authority

The social values of different goods could be given to the CPB by an omniscient, vanguard revolutionary socialist leadership. The authoritarian implications of any such undemocratic political process for deciding $v$ are obvious. The tension between preference fulfillment and human development might suggest the desirability of combining political determination with market or voting procedures.

#### Retail Prices

Alternatively, the CPB could use prices from retail outlets to find $v$. Here’s a heuristic model for a single time period:

1. The CPB solves the primal programming problem using an arbitrary initial vector of social values, $v'$.
2. Producers deliver their net output, $y' = (I - A)x'$, to retail outlets.
3. With whatever income they have, citizens purchase goods in these retail outlets.
4. Managers of retail outlets adjust the price of every final good, $p(j)_m$, until demand equals supply.

Since the initial $v'$ used by the CPB was arbitrary, there is no reason to expect the market clearing price in the retail outlets, $p(j)_m$, to be equal to the marginal social cost of producing good $j$, which was calculated using $v'$ as the vector of relative social values. Nonetheless, the CPB can calculate $p(j)_o = p(k)_o k(j) + p(r)_o r(j) + p(l)_o l(j) + p_o a(j)$ using $v'$ even though $p(j)_o$ is not “optimal.”

5. If $p(j)_m > p(j)_o$, the CPB increases $v(j)'$. If $p(j)_m < p(j)_o$, the CPB decreases $v(j)'$.
6. The CPB then replaces the initial, arbitrary vector of social values, $v'$, with a new vector $v'$ and solves the primal programming problem again using $v'$ instead of $v'$.
7. Steps 1–6 are repeated until $p(j)_m = p(j)_o$ for all $j$.

Eventually, $p(j)_m$ will equal $p(j)_o$ for all $j$, and we will have an optimal production plan, $x_o$, given consumers’ preferences and the distribution of income. In market economies, demand affects supply by influencing price in individual markets. In central planning, demand expressed in retail markets would influence supply via repeated recalculation of the entire economy's production plan, eventually using a $v'$ that yields $p_m = p_o$.

Starting with last year’s prices from retail outlets as this year’s $v'$ would be a big improvement over starting with an arbitrary $v'$. But this explanation illustrates how it is possible, at least in theory, for a CPB to use information from retail outlets to determine relative social values they need for their objective function, at least for private goods.

#### Voting

Finally, a third way to determine $v$ is to give every citizen “points” to use to vote for different goods, where voters would assign more points to goods they like more. The CPB would then simply add up all the points people voted for each good to find $v$.

It is worth pointing out two things:

1. While using prices from retail outlets to find $v$ provides no solution for valuing public goods, voting faces no such obstacle. Voters could signal preferences for public goods by assigning them some of their points.
2. If some citizens are given more points than others to use when voting, they would have a greater impact on $v$ and, therefore, a greater impact on what the economy produces than others.

There are a host of problems that have been analyzed with voting mechanisms for social welfare functions. But for the sake of discussion, we assume:

1. **Perfect Democracy**: Every member of society has the same number of points to vote.
2. **Informed Voting**: Voting is based on the fullest possible discussion of the merits of different arguments in the social welfare function and complete knowledge of both the fulfillment and development effects of all goods by all voters.
3. **Uncorrupted Voting**: Voting is not corrupted by “gamesmanship” or “coalition formation.”
4. **Ignoring Complications**: We rule out complications such as the problem of “cyclical majorities” and the “paradox of voting.”

Under these assumptions, we can imagine that $v$ might be found by allowing citizens to vote. While we may be less daunted than some by the literature detailing conceivable difficulties with majority voting, we do not deny these problems. For an excellent interpretation of this technical literature, see MacKay (1980). For now, we waive all such objections to focus on our primary concern: even at its best, voting for the planning objective function in central planning is not the same as economic self-management.

### Responding to the Tacit Knowledge Critique

The second “information problem” for central planning concerns how the Central Planning Bureau (CPB) can discover all the different productive technologies available to different production units to produce their goods – {A, K, R, L} in our one-year model. This is the famous tacit knowledge critique of central planning initially expounded by Austrian economists Ludvig von Mises and Friedrich Hayek. This critique has been accepted as definitive by many economists, including those who support market socialism, because they believe the tacit knowledge critique of comprehensive planning is valid. According to this criticism, while it may be possible for a central planning authority to calculate an optimal plan if it knows {A, K, R, L} (which includes multiple different “activities” for producing each good), it is impossible in practice because only local personnel know the technological capabilities of their own production units. It is impossible for the CPB to obtain this vast quantity of “tacit knowledge” from production units.

Like the first criticism of central planning, which was valid at one point in time, the tacit knowledge critique of central planning carried weight prior to the advent of a theoretical literature in the late 1960s. This literature, addressed by various economic theorists, aimed to tackle the challenge posed by the tacit knowledge critique. Edmond Malinvaud highlighted the problem: The planning bureau cannot be aware of all the information needed for a perfect description of techniques, as they are too numerous, complex, and diverse. Only individual firms or highly specialized industry offices can have precise knowledge of the conditions governing production in their particular field. Therefore, these firms and offices must participate in the preparation of the plan by providing information about production capabilities to the CPB, allowing the CPB to calculate an optimal production plan.

We will investigate procedures for achieving this. We begin with the method of “material balances,” the most common way central planners gathered information in practice, although it is demonstrably inefficient. We will then consider various iterative procedures involving trial prices, trial quantities, and gradient searches that, in theory, can provide the information about different production technologies the CPB needs to calculate an efficient plan.

#### Material Balances

Benjamin Ward explains the procedure of material balances: The planning bureau starts with a known bill of final demands for each sector. Its task is to find a bill of gross outputs for each sector that is consistent with this bill of final demands and with the production technology. The procedure is as follows:

1. The bureau reports to each sector its corresponding final demand.
2. Each sector calculates its input requirements to produce this final demand. To do this, each sector multiplies each coefficient in its column of A (the intermediate good input coefficient matrix for the economy) by the final demand. Each sector, or industry, knows its own technology – that is, its own column in the (n × n) economy input-output matrix A but no other columns, and the CPB does not know any of the columns at all. The results are reported to the bureau.
3. The bureau adds the input requirements for each good in each sector together and reports these to the sectors as additions to the previously assigned output level.
4. The process continues until further additions to requirements become insignificant. The bureau then takes its total requirements for each sector as the desired plan and assigns these as production targets to the individual sectors.

Ward observes that this process is equivalent to the power series expansion solution to a system of linear equations in which there is only one way to produce each good. The calculations are extremely simple, and minimal communication is involved. However, the scheme is inflexible, assuming no technological options for the sectors, no account of limitations on the attainable level of production, and no optimization since the final demands are given a priori, ignoring opportunities for higher performance levels.

Nonetheless, the method of material balances allows the CPB to come up with a plan without knowing in advance the production technologies used by individual sectors. However, the process is inherently inefficient because it does not take advantage of alternative technological processes available to firms and sectors, nor does it take advantage of opportunities to substitute goods that cost society less to produce for goods that cost society more to produce. It also requires repeating the entire process until a gross output vector is found that does not require more of any category of labor, natural resource, or capital stock than is available.

Despite these shortcomings, the method of material balances remained the most common way of planning in centrally planned economies until the abandonment of central planning in the Soviet Union and Eastern Europe.

#### Trial Prices

Danzig and Wolfe (1961) were the first to propose an iterative procedure where the center proposes tentative resource prices, and the producing units develop corresponding profit-maximizing production programs (with prices treated parametrically). The center then revises its proposed prices in light of the production programs received. An optimal solution to the economic programming problem can be reached using this procedure, assuming no technological externalities, all constraints are linear, both at the single production unit level and the overall economy level, and the objective function and overall constraints are additively separable.

Baumol and Fabian (1964) extended Danzig and Wolfe’s procedure to situations where constraints for single producing units are nonlinear, while the overall constraints for resources needed by all units remain linear. The best-known procedure for arriving at an optimal production plan through trial prices is by Edmond Malinvaud. In Malinvaud’s procedure, the center proposes prices to the producing units, which then determine production plans maximizing the value of the firm’s output in terms of those prices. The center builds up its picture of each unit’s production set by taking all convex mixtures of its previous proposed input-output vectors, together with the initial feasible vector. Treating its pictures of the production sets as actual sets, the center maximizes its utility function subject to the resource availability constraint and proposes a new set of prices corresponding to the relevant marginal rates of substitution.

Malinvaud’s procedure requires the bureau to know the set X of acceptable final consumption, the available resource vector, and the utility function u(x), but not the specifications of the production possibility sets for individual production units. Firms have perfect knowledge of their technical possibilities but do not know the sets applicable to other firms, the resource vector, or the utility function.

The assumptions are that the individual production sets are closed, bounded, and convex; the set X is closed, convex, and bounded from below; the function u(x) is continuous and concave; and the planning bureau knows a feasible program to begin with. Under these conditions, Malinvaud’s procedure yields a feasible plan at every iteration, is well-defined, monotonic, and convergent. It ensures that solutions exist for the operations according to which the firms’ proposals, the prospective indices, and the plan can be determined, yielding a feasible program. The value of the social welfare function never lowers in any successive iteration and tends to the least upper bound of u(x) over the set of feasible programs as iterations increase indefinitely.

#### Trial Quantities

Kornai and Liptak assume block angularity or subsets of constraints for each sector and resource constraints affecting the whole economy. In their procedure, the center proposes allotments of scarce resources to sectors, and each sector responds with shadow prices minimizing the value of the allotment subject to sectoral dual constraints. The center aims to maximize the contributions of the sectors to the objective function, maximizing the value of the allocated resources at the shadow prices received from the sectors, subject to available resource totals.

Although Kornai and Liptak establish convergence with any desired accuracy by structuring the dialogue as a fictitious game, they cannot guarantee a solution in a finite number of steps. The procedure is not completely informationally decentralized since sectoral allotments must be large enough to assure feasible solutions for each sector.

#### Mixed Price-Quantity Procedures

Mixed price-quantity procedures combine price and quantity guidance. Heal (1971) describes a procedure using mixed price and quantity guidance that locates a local maximum of the objective function even with increasing returns to scale, satisfying feasibility and monotonicity criteria. The essential informational feature is that certain functions of each producing unit’s marginal productivities must be conveyed to the center. This added flexibility allows the procedure to converge to an optimum even in the presence of increasing returns.

Aoki’s procedure handles mixtures of private and public goods by using price-guidance for private goods and quantity-guidance for public goods. Producers develop production plans maximizing net revenue given central guidelines, and convey their demands for private goods and marginal evaluations for public goods to the center. The center adjusts the price of each private good according to the difference between its marginal utility and price and increases targets for public goods based on net aggregate marginal valuations.

#### Gradient Procedures

Gradient procedures involve price-guidance. Koopmans (1951) described an allocation game with a helmsman setting final goods prices, commodity custodians adjusting resource prices according to excess demand, and activity managers determining production programs. Managers expand profitable activities and curtail loss-making ones. Arrow and Hurwicz (1960) used gradient rules where the helmsman changes final demand rates equal to the difference between marginal utility and price, managers change process scales proportionate to marginal profitability, and custodians vary commodity prices according to excess demand.

The strict concavity assumptions are critical for convergence to an optimum, and none of the intermediate plans are feasible. Uzawa (1958) constructed a discrete-time counterpart that overcame this feature.



### Central planning Why not to do it



Last chapter we described three different ways a Central Planning Bureau (CPB) might go about finding the objective function it needs to calculate a plan. Real-world central planning always used either the first or second method. Either political authorities told the CPB what the economic objectives were, or the CPB used prices in retail outlets as guides. More often, a combination of these two methods was used, with the relative emphasis varying during different political periods. Since our goal is to demonstrate why even best-case central planning—that is, central planning that is as democratic as possible—is nonetheless problematic, we will assume \( v \) is determined by democratic voting. And as explained in the last chapter, to give voting every benefit of the doubt, we will assume away a host of potential problems with voting for social welfare functions discussed in the literature.

As explained in Chapter 1, the effects of different economic activities are not usually confined to single individuals or units in the economy, but neither are they evenly spread over all members of society. With this in mind, we defined economic self-management as decision-making input, or power, in proportion to the degree one is affected by different economic choices. Consider the choice of what to produce where you work and how to produce it. Even if there were no externalities associated with production, those decisions will affect consumers, other workers who produce various inputs you need, and everyone more broadly since any scarce resources used where you work will not be available for use elsewhere. Nonetheless, the decision about what you produce and how you go about it will affect you and your coworkers more than it affects others. This is why you should have more say than others over the decision of what you and your coworkers produce, and how you go about it—although others should have some say over those decisions as well, since they will also be affected, albeit to a lesser degree.

How is the decision about what is produced and how it is produced in your workplace made in central planning? Even in the most democratic version of central planning we can imagine, those decisions will be made when people vote for \( v \). Once the CPB has \( v \), it will calculate a production plan, which includes a plan for how much your workplace must produce and what inputs you will be allocated to do this. So if everyone has the same number of points to vote for \( v \), everyone will have an equal say over what your workplace produces and how you go about it—that is, everyone else will have as much say as you do. Clearly if people have a different number of points to vote for \( v \), central planning will be less democratic. But even if it is completely democratic, it does not provide economic self-management.

Another way to see the problem is this: I want “extra” authority in the decision-making process when it comes to questions about my workplace. And in return, I am willing to grant more authority to others concerning what goes on in their workplace. Also, to the extent that what others decide affects me, I want some say; and to the extent that what I and my coworkers do affects others, I am willing to grant them some say. Moreover, this is not simply because of differences in information about what the consequences of outcomes are likely to be. Yes, I probably better understand the consequences of decisions about what goes on in the factory where I work, while others understand consequences better in the factories where they work. So we could make an efficiency argument for self-managed decision-making. But more fundamentally, in the case of my workplace, I am more affected—so my preferences and opinions should count for more—and in the case of others’ workplaces, they are more affected—so their preferences and opinions should count for more.

Some of the bias against self-managed work can be alleviated in central planning by including different categories of work activities along with different consumption goods in the social welfare function, as we did in the objective function of the multi-good, multi-year model last chapter. But this in no way solves the problem discussed earlier. To the extent that a skilled carpenter has more power to define the nature, organization, and pace of his or her work activities than an assembly-line worker, people could record their preference for self-managed work by voting fewer negative points for carpentry than assembly-line work when distributing their points among different arguments in the social welfare function. And of course anyone with a strong preference for more self-managed jobs could become a carpenter and avoid work on an assembly line. But even in the most democratic version of central planning imaginable, whether I am a carpenter or an assembly-line worker in a particular workplace, this gives me no more say over choice of product and technology in my workplace than a carpenter or assembly-line worker in a workplace thousands of miles away. That problem cannot be overcome by including the list of different labor activities in the social welfare function, permitting people to indicate their preferences for occupational categories characterized by more self-management when voting on the social welfare function the CPB will use, and choosing what kind of jobs to apply for themselves.

For readers interested in a more formal treatment of this problem, chapter 9 in Hahnel and Albert (1990) elaborates on this bias against self-management inherent to central planning, where we prove the following theorems in a dynamic model in which people have endogenous preferences:
- **Theorem 9.1**: Centrally planned economies will “charge” individual job seekers more for self-managed work activities compared to other activities than is socially optimal, resulting in less self-managed work being performed than is socially optimal.
- **Theorem 9.2**: In a centrally planned economy not only will self-managed laboring activities be underpaid and under-supplied at some initial point in time, but the degree of divergence from optimality will grow, or “snowball” over time. Accompanying the snowballing non-optimal allocations will be a “snowballing” apathy consisting of “warped” human characteristics which undervalue self-managed work activity.