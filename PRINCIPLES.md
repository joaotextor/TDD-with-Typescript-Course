# **F.I.R.S.T Principles**

## Principle 1: Fast

Unit tests should be as fast as possible

The Faster the Better:

* They run **more often**
* You get **more feedback**

**So:**

1. Most tests should be small & in process
2. Monitor test speed. Try to improve the speed.
3. Break out slower tests, putting in another suite (Run quicker tests while coding, let the slower to before committing)

## Principle 2: Independent / Isolated

We don't want external factors affecting our tests.

It should not depend on some external thing.

Tests should not affect one another.

*Use:*

1. Arrange, Act, Assert
2. No shared state - use a transient fixture that will be thrown away after the test is completed.
3. No sequence dependencies - each test is a single program.

## Principle 3: Repeatable

Deterministic Results

Beware <span style="color:green">f</span><span style="color:red">l</span><span style="color:green">i</span><span style="color:red">ck</span><span style="color:green">e</span><span style="color:red">r</span><span style="color:green">i</span><span style="color:red">n</span><span style="color:green">g</span> test!

No time dependency

No random data dependency

For each test: set up and arrange its own data

The more repeatable a test, more slow it will be.

## Principle 4: Self-validating

Tests either pass or fail.

The test runner reports the resut

## Principle 5: Thorough

Aim to cover every scenario

Raw code coverage is not sufficient

Use:

1. **A few** acceptance tests
2. **Some** integration tests
3. **Many** unit tests
4. TDD!
