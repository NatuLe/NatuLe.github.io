---
layout: post
title: "Chinese Remainder Theorem"
date: 2024-06-25 
categories: blogging
permalink: /:year/:month/:day/:title.html


---

# Chinese Remainder Theorem

### THE CHINESE REMAINDER THEOREM

Throughout this section, unless otherwise stated, all rings are assumed to be commutative with an identity $1 \neq 0$.

Given an arbitrary collection of rings (not necessarily satisfying the conventions above), their (ring) direct product is defined to be their direct product as (abelian) groups, made into a ring by defining multiplication componentwise. In particular, if $R_1$ and $R_2$ are two rings, we shall denote by $R_1 \times R_2$ their direct product (as rings), that is, the set of ordered pairs $(r_1, r_2)$ with $r_1 \in R_1$ and $r_2 \in R_2$ where addition and multiplication are performed componentwise:
$$ (r_1, r_2) + (s_1, s_2) = (r_1 + s_1, r_2 + s_2) $$
and
$$ (r_1, r_2)(s_1, s_2) = (r_1 s_1, r_2 s_2). $$

We note that a map $\varphi$ from a ring $R$ into a direct product ring is a homomorphism if and only if the induced maps into each of the components are homomorphisms.

There is a generalization to arbitrary rings of the notion in $\mathbb{Z}$ of two integers $n$ and $m$ being relatively prime (even to rings where the notion of greatest common divisor is not defined). In $\mathbb{Z}$, this is equivalent to being able to solve the equation $nx + my = 1$ in integers $x$ and $y$. This, in turn, is equivalent to $n/\mathbb{Z} + m/\mathbb{Z} = \mathbb{Z}$ as ideals (in general, $n/\mathbb{Z} + m/\mathbb{Z} = (m, n)/\mathbb{Z}$). This motivates the following definition:

**Definition.**
The ideals $A$ and $B$ of the ring $R$ are said to be comaximal if $A + B = R$.

Recall that the product $AB$ of the ideals $A$ and $B$ of $R$ is the ideal consisting of all finite sums of elements of the form $xy$, $x \in A$ and $y \in B$. If $A = (a)$ and $B = (b)$, then $AB = (ab)$. More generally, the product of the ideals $A_1, A_2, \ldots, A_k$ is the ideal of all finite sums of elements of the form $x_1 x_2 \cdots x_k$ such that $x_i \in A_i$ for all $i$. If $A_i = (a_i)$, then $A_1 \cdots A_k = (a_1 \cdots a_k)$.

**Theorem 17. (Chinese Remainder Theorem)**
Let $A_1, A_2, \ldots, A_k$ be ideals in $R$. The map
$$ R \to R/A_1 \times R/A_2 \times \cdots \times R/A_k $$
defined by
$$ r \mapsto (r + A_1, r + A_2, \ldots, r + A_k) $$
is a ring homomorphism with kernel $A_1 \cap A_2 \cap \cdots \cap A_k$. If for each $i, j \in \{1, 2, \ldots, k\}$ with $i \neq j$ the ideals $A_i$ and $A_j$ are comaximal, then this map is surjective and $A_1 \cap A_2 \cap \cdots \cap A_k = A_1 A_2 \cdots A_k$. So,
$$ R/(A_1 A_2 \cdots A_k) = R/(A_1 \cap A_2 \cap \cdots \cap A_k) \cong R/A_1 \times R/A_2 \times \cdots \times R/A_k. $$

**Proof:** We first prove this for $k = 2$; the general case will follow by induction.
Let $A = A_1$ and $B = A_2$. Consider the map $\psi : R \to R/A \times R/B$ defined by
$$ \psi(r) = (r \mod A, r \mod B), $$
where $\mod A$ means the class in $R/A$ containing $r$ (that is, $r + A$). This map is a ring homomorphism because $\psi$ is just the natural projection of $R$ into $R/A$ and $R/B$ for the two components. The kernel of $\psi$ consists of all the elements $r \in R$ that are in $A$ and in $B$, i.e., $A \cap B$. To complete the proof in this case, it remains to show that when $A$ and $B$ are comaximal, $\psi$ is surjective and $A \cap B = AB$.

Since $A + B = R$, there are elements $x \in A$ and $y \in B$ such that $x + y = 1$. This equation shows that $\psi(x) = (0, 1)$ and $\psi(y) = (1, 0)$ since, for example, $x$ is an element of $A$ and $x = 1 - y \in 1 + B$. If now $(r_1 \mod A, r_2 \mod B)$ is an arbitrary element in $R/A \times R/B$, then the element $r_2 x + r_1 y$ maps to this element since

This shows 
$$
\begin{aligned} \psi(r_2 x + r_1 y) &= \psi(r_2) \psi(x) + \psi(r_1) \psi(y) \\&= (r_2 \mod A, r_2 \mod B)(0, 1) + (r_1 \mod A, r_1 \mod B)(1, 0) \\&= (0, r_2 \mod B) + (r_1 \mod A, 0) \\&= (r_1 \mod A, r_2 \mod B). 
\end{aligned}
$$


that $\psi$ is indeed surjective. Finally, the ideal $AB$ is always contained in $A \cap B$. If $A$ and $B$ are comaximal and $x$ and $y$ are as above, then for any $c \in A \cap B$,
$$ c = c \cdot 1 = c(x + y) = cx + cy \in AB. $$
This establishes the reverse inclusion $A \cap B \subseteq AB$ and completes the proof when $k = 2$.

This shows that $\psi$ is indeed surjective. Finally, the ideal $AB$ is always contained in $A \cap B$. If $A$ and $B$ are comaximal and $x$ and $y$ are as above, then for any $c \in A \cap B$,
$$ c = c \cdot 1 = c(x + y) = cx + cy \in AB. $$
This establishes the reverse inclusion $A \cap B \subseteq AB$ and completes the proof when $k = 2$.

The general case follows easily by induction from the case of two ideals using $A = A_1$ and $B = A_2 \cdots A_k$ once we show that $A_1$ and $A_2 \cdots A_k$ are comaximal. By hypothesis, for each $i \in \{2, 3, \ldots, k\}$, there are elements $x_i \in A_1$ and $y_i \in A_i$ such that $x_i + y_i = 1$. Since $x_i + y_i = 1 \mod A_1$, it follows that $1 = (x_2 + y_2) \cdots (x_k + y_k)$ is an element in $A_1 + (A_2 \cdots A_k)$. This completes the proof.

This theorem obtained its name from the special case $\mathbb{Z}/mn\mathbb{Z} \cong (\mathbb{Z}/m\mathbb{Z}) \times (\mathbb{Z}/n\mathbb{Z})$ as rings when $m$ and $n$ are relatively prime integers. We proved this isomorphism just for the additive groups earlier. This isomorphism, phrased in number-theoretic terms, relates to simultaneously solving two congruences modulo relatively prime integers (and states that such congruences can always be solved, and uniquely). Such problems were considered by the ancient Chinese, hence the name. Some examples are provided in the exercises.

Since the isomorphism in the Chinese Remainder Theorem is an isomorphism of rings, in particular, the groups of units on both sides must be isomorphic. It is easy to see that the units in any direct product of rings are the elements that have units in each of the coordinates. In the case of $\mathbb{Z}/mn\mathbb{Z}$, the Chinese Remainder Theorem gives the following isomorphism for the groups of units:
$$ (\mathbb{Z}/mn\mathbb{Z})^\times \cong (\mathbb{Z}/m\mathbb{Z})^\times \times (\mathbb{Z}/n\mathbb{Z})^\times. $$
We may iterate this to obtain a similar isomorphism for any finite collection of pairwise relatively prime integers. This isomorphism gives another derivation of Euler's formula for $\phi(n)$:
$$ \phi(mn) = \phi(m) \phi(n) $$

when $m$ and $n$ are relatively prime. We shall prove in Section 8.2, directly from the definition of $\phi$, that
$$\phi(mn) = \phi(m)\phi(n)$$ 
for any $m$ and $n$ and will use the multiplicativity of $\phi$ and the Chinese Remainder Theorem to deduce Euler's formula
$$ \phi(n) = n \prod_{p \mid n} \left(1 - \frac{1}{p}\right) $$
for any $n$.

### SOME APPLICATIONS OF THE CHINESE REMAINDER THEOREM

**Application 1.**

The number of solutions to the simultaneous congruences
$$ x \equiv a_1 \pmod{m_1}, \, x \equiv a_2 \pmod{m_2}, \, \ldots, \, x \equiv a_k \pmod{m_k}, $$
where $(m_1, m_2, \ldots, m_k) = 1$, is equal to the product of the $m_i$'s, i.e., $m_1 m_2 \cdots m_k$.

**Application 2.**

The system of congruences
$$ x \equiv a \pmod{m} $$
and
$$ x \equiv b \pmod{n} $$
where $(m, n) = 1$, has a unique solution modulo $mn$.

**Application 3.**

The number of units in $\mathbb{Z}/mn\mathbb{Z}$ is $(m-1)(n-1)$ when $m$ and $n$ are relatively prime.

**Application 4.**

The number of solutions to the congruence
$$ x^2 \equiv 1 \pmod{n} $$
is given by $2^k$ where $n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}$ is the prime factorization of $n$.

**Application 5.**

For any integer $n$, the number of ways to express $n$ as a sum of two squares is related to the prime factorization of $n$.