```yaml
- mkdocs-jupyter:
    theme: dark
    ignore_h1_titles: true
    include_requirejs: true
    include_source: true
- mkdocstrings:
    default_handler: python
    handlers:
      python:
        inventories:
        - https://docs.python.org/3/objects.inv
        - https://docs.pydantic.dev/latest/objects.inv
        options:
          docstring_style: google
          annotations_path: brief
          docstring_section_style: table
          members_order: [ __all__, source ]
          show_if_no_docstring: false
          show_symbol_type_heading: true
          signature_crossrefs: true
          show_source: true
          allow_inspection: true
          force_inspection: false
          heading_level: 1
          separate_signature: true
          show_bases: true
          show_root_full_path: true
          show_root_heading: true
          show_signature_annotations: true
          show_signature: true
          show_submodules: false
          show_symbol_type_toc: true
          merge_init_into_class: true
          show_docstring_examples: true
          group_by_category: true
          summary: false
          show_labels: true
          show_root_members_full_path: false
          docstring_options:
            returns_named_value: false
```