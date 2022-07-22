<?php

return (new PhpCsFixer\Config())
    ->setRiskyAllowed(true)
    ->setRules([
        '@PhpCsFixer' => true,
        'blank_line_before_statement' => [
            'statements' => [
                'for', 'foreach', 'if', 'switch', 'try',
            ],
        ],
        'self_static_accessor' => true,
        'global_namespace_import' => true,
        'phpdoc_add_missing_param_annotation' => [
            'only_untyped' => false,
        ],
        'yoda_style' => [
            'always_move_variable' => false,
            'equal' => false,
            'identical' => false,
        ],
    ])
    ->setFinder(
        PhpCsFixer\Finder::create()
    ->exclude('vendor')
    ->in([
        __DIR__.'/app',
        __DIR__.'/config',
        __DIR__.'/database',
        __DIR__.'/routes',
        __DIR__.'/resources/views',
        __DIR__.'/tests',
    ])
    )
;
