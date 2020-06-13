<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * @test
     * @dataProvider dataProvider_for_basicTest
     */
    public function basicTest(int $expected, int $amount)
    {
        $this->assertSame($expected, $amount);
    }

    public function dataProvider_for_basicTest()
    {
        return [
            "0" => [0, 0],
            "2" => [2, 2],
            "0 1000" => [0, 100]
        ];
    }
}
